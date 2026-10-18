use napi::{bindgen_prelude::*, Env, ValueType};

pub struct Options<'a>(Option<Object<'a>>);

impl<'a> Options<'a> {
    pub fn new(value: Option<Unknown<'a>>) -> Result<Self> {
        Ok(Self(match value {
            Some(value) if value.get_type()? == ValueType::Object => {
                Some(Object::from_unknown(value)?)
            }
            _ => None,
        }))
    }

    pub fn finite(&self, key: &str) -> Result<Option<f64>> {
        let Some(object) = &self.0 else {
            return Ok(None);
        };
        let value = object.get_named_property::<Unknown>(key)?;
        if value.get_type()? != ValueType::Number {
            return Ok(None);
        }
        let value = f64::from_unknown(value)?;
        Ok(value.is_finite().then_some(value))
    }

    pub fn size(&self, key: &str, fallback: usize, min: usize, max: usize) -> Result<usize> {
        Ok(self
            .finite(key)?
            .map(|value| (value.clamp(min as f64, max as f64) + 0.5) as usize)
            .unwrap_or(fallback))
    }

    pub fn boolean(&self, key: &str, fallback: bool) -> Result<bool> {
        let Some(object) = &self.0 else {
            return Ok(fallback);
        };
        let value = object.get_named_property::<Unknown>(key)?;
        if value.get_type()? == ValueType::Boolean {
            bool::from_unknown(value)
        } else {
            Ok(fallback)
        }
    }

    pub fn string(&self, key: &str) -> Result<String> {
        let Some(object) = &self.0 else {
            return Ok(String::new());
        };
        let value = object.get_named_property::<Unknown>(key)?;
        if value.get_type()? == ValueType::String {
            String::from_unknown(value)
        } else {
            Ok(String::new())
        }
    }
}

pub fn type_error(env: Env, message: &str) -> Error {
    env.throw_type_error(message, None)
        .err()
        .unwrap_or_else(|| Error::new(Status::PendingException, message))
}

pub fn runtime_error(env: Env, message: &str) -> Error {
    env.throw_error(message, None)
        .err()
        .unwrap_or_else(|| Error::new(Status::PendingException, message))
}

pub fn range_error(env: Env, message: &str) -> Error {
    env.throw_range_error(message, None)
        .err()
        .unwrap_or_else(|| Error::new(Status::PendingException, message))
}

pub fn number(env: Env, value: Unknown, message: &str) -> Result<f64> {
    if value.get_type()? != ValueType::Number {
        return Err(type_error(env, message));
    }
    f64::from_unknown(value)
}

pub fn buffer(env: Env, value: Unknown, message: &str) -> Result<Buffer> {
    if !value.is_buffer()? {
        return Err(type_error(env, message));
    }
    Buffer::from_unknown(value)
}
