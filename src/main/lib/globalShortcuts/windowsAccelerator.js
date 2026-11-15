const MODIFIERS = {
    Ctrl: 1,
    Control: 1,
    CmdOrCtrl: 1,
    CommandOrControl: 1,
    Alt: 2,
    Option: 2,
    AltGr: 3,
    Shift: 4,
    Super: 8,
    Cmd: 8,
    Command: 8,
};

const KEYS = {
    Backspace: 0x08,
    Tab: 0x09,
    Enter: 0x0d,
    Return: 0x0d,
    Escape: 0x1b,
    Esc: 0x1b,
    Space: 0x20,
    PageUp: 0x21,
    PageDown: 0x22,
    End: 0x23,
    Home: 0x24,
    Left: 0x25,
    Up: 0x26,
    Right: 0x27,
    Down: 0x28,
    PrintScreen: 0x2c,
    Insert: 0x2d,
    Delete: 0x2e,
    VolumeMute: 0xad,
    VolumeDown: 0xae,
    VolumeUp: 0xaf,
    MediaNextTrack: 0xb0,
    MediaPreviousTrack: 0xb1,
    MediaStop: 0xb2,
    MediaPlayPause: 0xb3,
    ';': 0xba,
    '=': 0xbb,
    ',': 0xbc,
    '-': 0xbd,
    '.': 0xbe,
    '/': 0xbf,
    '`': 0xc0,
    '[': 0xdb,
    '\\': 0xdc,
    ']': 0xdd,
    "'": 0xde,
};

const SHIFTED_KEYS = Object.fromEntries(Array.from(')!@#$%^&*(:+<_>?~{|}"', (symbol, index) => [symbol, "0123456789;=,-./`[\\]'"[index]]));

function windowsAccelerator(accelerator) {
    let modifiers = 0;
    let key = 0;
    for (let part of accelerator.split('+')) {
        if (Object.hasOwn(MODIFIERS, part)) {
            modifiers |= MODIFIERS[part];
            continue;
        }
        if (key) return null;
        if (part === 'Plus') part = '+';
        if (Object.hasOwn(SHIFTED_KEYS, part)) {
            modifiers |= 4;
            part = SHIFTED_KEYS[part];
        }
        if (/^[A-Z0-9]$/.test(part)) key = part.charCodeAt(0);
        else if (/^F(?:[1-9]|1[0-9]|2[0-4])$/.test(part)) key = 0x6f + Number(part.slice(1));
        else key = Object.hasOwn(KEYS, part) ? KEYS[part] : 0;
        if (!key) return null;
    }
    return key ? (modifiers << 8) | key : null;
}

module.exports = { windowsAccelerator };
