#[derive(Clone, Copy)]
pub struct PcmFormat {
    pub channels: u32,
    pub bits: u32,
    pub container: u32,
    pub float: bool,
}

impl PcmFormat {
    pub fn alignment(self) -> usize {
        self.channels as usize * (self.container as usize / 8)
    }

    pub fn name(self) -> String {
        if self.float {
            "float32".into()
        } else if self.bits == 24 && self.container == 32 {
            "pcm24in32".into()
        } else {
            format!("pcm{}", self.bits)
        }
    }
}

pub fn apply(data: &mut [u8], frames: usize, format: PcmFormat, start: f64, end: f64) {
    let (start, end) = (start.clamp(0.0, 1.0), end.clamp(0.0, 1.0));
    let alignment = format.alignment();
    let Some(length) = frames.checked_mul(alignment) else {
        return;
    };
    if frames == 0 || alignment == 0 || length > data.len() {
        return;
    }
    if (start - 1.0).abs() < 1e-12 && (end - 1.0).abs() < 1e-12 {
        return;
    }
    if start == 0.0 && end == 0.0 {
        data[..length].fill(0);
        return;
    }
    let sample_bytes = format.container as usize / 8;
    for (frame_index, frame) in data[..length].chunks_exact_mut(alignment).enumerate() {
        let progress = (frame_index + 1) as f64 / frames as f64;
        let gain = start + (end - start) * progress;
        for sample in frame.chunks_exact_mut(sample_bytes) {
            match (format.bits, format.container, format.float) {
                (_, 32, true) => {
                    let value = f32::from_le_bytes(sample.try_into().unwrap());
                    sample.copy_from_slice(&((value as f64 * gain) as f32).to_le_bytes());
                }
                (16, 16, false) => {
                    let value = i16::from_le_bytes(sample.try_into().unwrap());
                    sample.copy_from_slice(
                        &((value as f64 * gain)
                            .round()
                            .clamp(i16::MIN as f64, i16::MAX as f64)
                            as i16)
                            .to_le_bytes(),
                    );
                }
                (24, 24, false) => {
                    let value =
                        ((sample[0] as i32 | (sample[1] as i32) << 8 | (sample[2] as i32) << 16)
                            << 8)
                            >> 8;
                    let output = (value as f64 * gain).round().clamp(-8388608.0, 8388607.0) as i32;
                    sample.copy_from_slice(&output.to_le_bytes()[..3]);
                }
                (24, 32, false) => {
                    let value = i32::from_le_bytes(sample.try_into().unwrap()) >> 8;
                    let output =
                        ((value as f64 * gain).round().clamp(-8388608.0, 8388607.0) as i32) * 256;
                    sample.copy_from_slice(&output.to_le_bytes());
                }
                (32, 32, false) => {
                    let value = i32::from_le_bytes(sample.try_into().unwrap());
                    sample.copy_from_slice(
                        &((value as f64 * gain)
                            .round()
                            .clamp(i32::MIN as f64, i32::MAX as f64)
                            as i32)
                            .to_le_bytes(),
                    );
                }
                _ => {}
            }
        }
    }
}
