pub struct RingBuffer {
    data: Vec<u8>,
    read: usize,
    write: usize,
    pub length: usize,
    pub rejected: u64,
    pub partial: u64,
}

pub fn align_down(value: usize, alignment: usize) -> usize {
    value - value % alignment
}

impl RingBuffer {
    pub fn new(capacity: usize, alignment: usize) -> Self {
        Self {
            data: vec![0; align_down(capacity, alignment)],
            read: 0,
            write: 0,
            length: 0,
            rejected: 0,
            partial: 0,
        }
    }
    pub fn capacity(&self) -> usize {
        self.data.len()
    }
    pub fn write(&mut self, data: &[u8], alignment: usize) -> usize {
        let requested = align_down(data.len(), alignment);
        if self.capacity() == 0 || requested == 0 {
            return 0;
        }
        let length = requested.min(align_down(self.capacity() - self.length, alignment));
        if length < requested {
            self.rejected += (requested - length) as u64;
            self.partial += 1;
        }
        if length == 0 {
            return 0;
        }
        let first = length.min(self.capacity() - self.write);
        self.data[self.write..self.write + first].copy_from_slice(&data[..first]);
        self.data[..length - first].copy_from_slice(&data[first..length]);
        self.write = (self.write + length) % self.capacity();
        self.length += length;
        length
    }
    pub fn read(&mut self, data: &mut [u8], alignment: usize) -> usize {
        let length = align_down(data.len(), alignment).min(align_down(self.length, alignment));
        if length == 0 {
            return 0;
        }
        let first = length.min(self.capacity() - self.read);
        data[..first].copy_from_slice(&self.data[self.read..self.read + first]);
        data[first..length].copy_from_slice(&self.data[..length - first]);
        self.read = (self.read + length) % self.capacity();
        self.length -= length;
        length
    }
    pub fn clear(&mut self) -> usize {
        let length = self.length;
        self.read = 0;
        self.write = 0;
        self.length = 0;
        length
    }
}
