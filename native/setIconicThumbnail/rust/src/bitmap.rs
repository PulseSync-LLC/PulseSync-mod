use std::{ffi::c_void, mem::size_of, ptr, slice};
use windows_sys::Win32::{
    Graphics::{Gdi::*, GdiPlus::*},
    UI::Shell::SHCreateMemStream,
};

const PIXEL_FORMAT_32BPP_ARGB: i32 = 0x0026200a;

pub fn byte_length(width: u32, height: u32) -> Option<usize> {
    if width == 0 || height == 0 || width > i32::MAX as u32 / 4 || height > i32::MAX as u32 {
        return None;
    }
    (width as usize)
        .checked_mul(height as usize)?
        .checked_mul(4)
        .filter(|length| *length <= isize::MAX as usize)
}

pub struct Bitmap {
    pub handle: HBITMAP,
    pixels: *mut u8,
    length: usize,
}

impl Bitmap {
    fn new(width: u32, height: u32) -> Option<Self> {
        let length = byte_length(width, height)?;
        let info = BITMAPINFO {
            bmiHeader: BITMAPINFOHEADER {
                biSize: size_of::<BITMAPINFOHEADER>() as u32,
                biWidth: width as i32,
                biHeight: -(height as i32),
                biPlanes: 1,
                biBitCount: 32,
                biCompression: BI_RGB,
                ..Default::default()
            },
            ..Default::default()
        };
        let mut pixels = ptr::null_mut();
        // SAFETY: dimensions and length were checked; GDI owns the returned top-down DIB allocation.
        let handle = unsafe {
            CreateDIBSection(
                ptr::null_mut(),
                &info,
                DIB_RGB_COLORS,
                &mut pixels,
                ptr::null_mut(),
                0,
            )
        };
        if handle.is_null() {
            return None;
        }
        let bitmap = Self {
            handle,
            pixels: pixels.cast(),
            length,
        };
        if pixels.is_null() {
            return None;
        }
        Some(bitmap)
    }

    fn pixels(&mut self) -> &mut [u8] {
        // SAFETY: this unique owner holds a live DIB with exactly length writable bytes.
        unsafe { slice::from_raw_parts_mut(self.pixels, self.length) }
    }

    pub fn raw(data: &[u8], width: u32, height: u32, rgba: bool) -> Option<Self> {
        if byte_length(width, height)? != data.len() {
            return None;
        }
        let mut bitmap = Self::new(width, height)?;
        let output = bitmap.pixels();
        if rgba {
            for (source, target) in data.chunks_exact(4).zip(output.chunks_exact_mut(4)) {
                target.copy_from_slice(&[source[2], source[1], source[0], source[3]]);
            }
        } else {
            output.copy_from_slice(data);
        }
        Some(bitmap)
    }
}

impl Drop for Bitmap {
    fn drop(&mut self) {
        // SAFETY: this owner deletes the HBITMAP once, after all DWM calls and pixel borrows finish.
        unsafe { DeleteObject(self.handle) };
    }
}

struct GdiPlus(usize);

impl GdiPlus {
    fn new() -> Option<Self> {
        let input = GdiplusStartupInput {
            GdiplusVersion: 1,
            ..Default::default()
        };
        let mut token = 0;
        // SAFETY: startup receives live input/output pointers; each call owns its own token.
        if unsafe { GdiplusStartup(&mut token, &input, ptr::null_mut()) } != Ok {
            return None;
        }
        Some(Self(token))
    }
}

impl Drop for GdiPlus {
    fn drop(&mut self) {
        // SAFETY: all images/graphics from this scoped startup have already been destroyed.
        unsafe { GdiplusShutdown(self.0) };
    }
}

#[repr(C)]
struct UnknownVTable {
    query_interface: *const c_void,
    add_ref: *const c_void,
    release: unsafe extern "system" fn(*mut c_void) -> u32,
}

struct Stream(*mut c_void);

impl Drop for Stream {
    fn drop(&mut self) {
        // SAFETY: SHCreateMemStream returns an owned IStream with the COM IUnknown vtable prefix.
        // The stream outlives its GDI+ decoder and is released on the creating thread, exactly once.
        unsafe {
            let vtable = *(self.0 as *const *const UnknownVTable);
            ((*vtable).release)(self.0);
        }
    }
}

struct Image(*mut GpBitmap);

impl Drop for Image {
    fn drop(&mut self) {
        // SAFETY: this non-null GDI+ image is uniquely owned and its startup/stream are still alive.
        unsafe { GdipDisposeImage(self.0.cast()) };
    }
}

struct Graphics(*mut GpGraphics);

impl Drop for Graphics {
    fn drop(&mut self) {
        // SAFETY: the graphics context is uniquely owned and destroyed before its backing image.
        unsafe { GdipDeleteGraphics(self.0) };
    }
}

struct LockedPixels<'a> {
    image: &'a Image,
    data: BitmapData,
}

impl Drop for LockedPixels<'_> {
    fn drop(&mut self) {
        // SAFETY: data came from a successful LockBits on this still-live borrowed image.
        unsafe { GdipBitmapUnlockBits(self.image.0, &mut self.data) };
    }
}

pub fn encoded(data: &[u8], width: u32, height: u32) -> Result<Option<Bitmap>, &'static str> {
    let _gdiplus = GdiPlus::new().ok_or("Failed to initialize GDI+")?;
    std::result::Result::Ok(decode(data, width, height))
}

fn decode(data: &[u8], width: u32, height: u32) -> Option<Bitmap> {
    byte_length(width, height)?;
    let data_length = u32::try_from(data.len()).ok()?;
    // SAFETY: the input slice is valid for data_length bytes; SHCreateMemStream copies it.
    let stream_pointer = unsafe { SHCreateMemStream(data.as_ptr(), data_length) };
    if stream_pointer.is_null() {
        return None;
    }
    let stream = Stream(stream_pointer);
    let mut source_pointer = ptr::null_mut();
    // SAFETY: the stream remains alive until after the decoded image is disposed.
    let status = unsafe { GdipCreateBitmapFromStream(stream.0, &mut source_pointer) };
    if source_pointer.is_null() {
        return None;
    }
    let source = Image(source_pointer);
    if status != Ok {
        return None;
    }
    let (mut source_width, mut source_height) = (0, 0);
    // SAFETY: source is a live GDI+ image and both dimension outputs are valid.
    unsafe {
        if GdipGetImageWidth(source.0.cast(), &mut source_width) != Ok
            || GdipGetImageHeight(source.0.cast(), &mut source_height) != Ok
        {
            return None;
        }
    }
    byte_length(source_width, source_height)?;
    let scale = (width as f64 / source_width as f64).min(height as f64 / source_height as f64);
    let scaled_width = (source_width as f64 * scale) as i32;
    let scaled_height = (source_height as f64 * scale) as i32;
    let mut canvas_pointer = ptr::null_mut();
    // SAFETY: checked positive dimensions fit GDI+ signed parameters; null scan0 requests owned storage.
    let status = unsafe {
        GdipCreateBitmapFromScan0(
            width as i32,
            height as i32,
            0,
            PIXEL_FORMAT_32BPP_ARGB,
            ptr::null(),
            &mut canvas_pointer,
        )
    };
    if canvas_pointer.is_null() {
        return None;
    }
    let canvas = Image(canvas_pointer);
    if status != Ok {
        return None;
    }
    {
        let mut graphics_pointer = ptr::null_mut();
        // SAFETY: canvas is live and the graphics context is destroyed before locking its pixels.
        let status = unsafe { GdipGetImageGraphicsContext(canvas.0.cast(), &mut graphics_pointer) };
        if graphics_pointer.is_null() {
            return None;
        }
        let graphics = Graphics(graphics_pointer);
        if status != Ok {
            return None;
        }
        // SAFETY: both images/context are live; drawing matches the C++ centered bicubic destination.
        unsafe {
            if GdipSetInterpolationMode(graphics.0, InterpolationModeHighQualityBicubic) != Ok
                || GdipGraphicsClear(graphics.0, 0) != Ok
                || GdipDrawImageRectI(
                    graphics.0,
                    source.0.cast(),
                    (width as i32 - scaled_width) / 2,
                    (height as i32 - scaled_height) / 2,
                    scaled_width,
                    scaled_height,
                ) != Ok
            {
                return None;
            }
        }
    }
    let rect = Rect {
        X: 0,
        Y: 0,
        Width: width as i32,
        Height: height as i32,
    };
    let mut data = BitmapData::default();
    // SAFETY: the rectangle fits canvas; the returned lock is scoped below and always unlocked.
    if unsafe {
        GdipBitmapLockBits(
            canvas.0,
            &rect,
            ImageLockModeRead as u32,
            PIXEL_FORMAT_32BPP_ARGB,
            &mut data,
        )
    } != Ok
    {
        return None;
    }
    let locked = LockedPixels {
        image: &canvas,
        data,
    };
    let row_length = width as usize * 4;
    if locked.data.Scan0.is_null() || (locked.data.Stride.unsigned_abs() as usize) < row_length {
        return None;
    }
    let mut bitmap = Bitmap::new(width, height)?;
    for (y, row) in bitmap.pixels().chunks_exact_mut(row_length).enumerate() {
        // SAFETY: LockBits owns height rows; signed stride addresses each logical row, including bottom-up images.
        // The checked row width fits the lock stride; the destination is a disjoint live DIB row.
        unsafe {
            let source_row = locked
                .data
                .Scan0
                .cast::<u8>()
                .offset(y as isize * locked.data.Stride as isize);
            row.copy_from_slice(slice::from_raw_parts(source_row, row_length));
        }
    }
    Some(bitmap)
}
