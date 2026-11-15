use std::env;
use std::fs;
use std::path::PathBuf;
use std::process::Command;

fn resource_compiler() -> Option<PathBuf> {
    if let Some(path) = env::var_os("PATH").and_then(|path| {
        env::split_paths(&path)
            .map(|directory| directory.join("rc.exe"))
            .find(|file| file.is_file())
    }) {
        return Some(path);
    }

    let sdk = PathBuf::from(env::var_os("ProgramFiles(x86)")?).join(r"Windows Kits\10\bin");
    fs::read_dir(sdk)
        .ok()?
        .filter_map(Result::ok)
        .filter_map(|entry| {
            let name = entry.file_name();
            let version: Vec<u32> = name
                .to_str()?
                .split('.')
                .map(str::parse)
                .collect::<Result<_, _>>()
                .ok()?;
            let compiler = entry.path().join(r"x64\rc.exe");
            compiler.is_file().then_some((version, compiler))
        })
        .max_by(|(left, _), (right, _)| left.cmp(right))
        .map(|(_, compiler)| compiler)
}

fn main() {
    println!("cargo:rerun-if-changed=helper.rc");
    println!("cargo:rerun-if-changed=pulsesync.ico");

    let compiler = resource_compiler().expect("Windows SDK resource compiler (rc.exe) is required");
    let output = PathBuf::from(env::var_os("OUT_DIR").expect("Cargo OUT_DIR"));
    let resource = output.join("helper.res");
    let version = env!("CARGO_PKG_VERSION");
    let major = env!("CARGO_PKG_VERSION_MAJOR");
    let minor = env!("CARGO_PKG_VERSION_MINOR");
    let patch = env!("CARGO_PKG_VERSION_PATCH");
    fs::write(
        output.join("helper-version.h"),
        format!(
            "#define HELPER_VERSION {major},{minor},{patch},0\n#define HELPER_VERSION_TEXT \"{version}\"\n"
        ),
    )
    .expect("Could not write Windows version resource header");
    let status = Command::new(compiler)
        .arg("/nologo")
        .arg("/I")
        .arg(&output)
        .arg("/fo")
        .arg(&resource)
        .arg("helper.rc")
        .status()
        .expect("Could not run Windows resource compiler");
    assert!(status.success(), "Windows resource compilation failed");

    println!(
        "cargo:rustc-link-arg-bin=pulsesync_hotkeys={}",
        resource.display()
    );
}
