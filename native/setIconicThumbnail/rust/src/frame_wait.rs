use std::{
    ptr, thread,
    time::{Duration, Instant},
};

use napi::{Env, Result, Task};
use windows_sys::Win32::{
    Foundation::{CloseHandle, HANDLE, WAIT_OBJECT_0},
    System::Threading::{
        CreateWaitableTimerExW, SetWaitableTimerEx, WaitForSingleObject,
        CREATE_WAITABLE_TIMER_HIGH_RESOLUTION, TIMER_ALL_ACCESS,
    },
};

struct Timer(HANDLE);

impl Drop for Timer {
    fn drop(&mut self) {
        // SAFETY: this owner closes its successfully created timer after the wait completes.
        unsafe { CloseHandle(self.0) };
    }
}

pub struct FrameWait {
    deadline: Instant,
}

impl FrameWait {
    pub fn new(delay: Duration) -> Self {
        Self {
            deadline: Instant::now() + delay,
        }
    }

    fn remaining(&self) -> Duration {
        self.deadline.saturating_duration_since(Instant::now())
    }
}

impl Task for FrameWait {
    type Output = ();
    type JsValue = ();

    fn compute(&mut self) -> Result<()> {
        if self.remaining().is_zero() {
            return Ok(());
        }
        // SAFETY: the unnamed, non-inheritable timer has no callback or shared state.
        let handle = unsafe {
            CreateWaitableTimerExW(
                ptr::null(),
                ptr::null(),
                CREATE_WAITABLE_TIMER_HIGH_RESOLUTION,
                TIMER_ALL_ACCESS,
            )
        };
        if !handle.is_null() {
            let timer = Timer(handle);
            let remaining = self.remaining();
            if remaining.is_zero() {
                return Ok(());
            }
            let due_time = -(remaining.as_nanos().div_ceil(100) as i64);
            // SAFETY: due_time is a bounded relative delay; the owned timer stays live through the wait.
            if unsafe {
                SetWaitableTimerEx(timer.0, &due_time, 0, None, ptr::null(), ptr::null(), 0)
            } != 0
                && unsafe { WaitForSingleObject(timer.0, 1100) } == WAIT_OBJECT_0
            {
                return Ok(());
            }
        }
        // Older Windows versions can lack high-resolution timers. Never busy-wait or block JS.
        thread::sleep(self.remaining());
        Ok(())
    }

    fn resolve(&mut self, _env: Env, _output: ()) -> Result<()> {
        Ok(())
    }
}
