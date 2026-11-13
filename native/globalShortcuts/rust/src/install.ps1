$ErrorActionPreference = 'Stop'
$sid = $env:PULSESYNC_HOTKEYS_USER
$taskName = 'PulseSync.Hotkeys.v1.' + $sid
$scheduler = New-Object -ComObject 'Schedule.Service'
$scheduler.Connect()
$tasks = $scheduler.GetFolder('\')
$existing = $tasks.GetTasks(1) | Where-Object { $_.Name -eq $taskName }

$programFiles = [Environment]::GetFolderPath('ProgramFiles')
if (!$programFiles) { throw 'Program Files was not found' }
$directory = Join-Path $programFiles ('PulseSync.Hotkeys.v1.' + $sid)
$helper = Join-Path $directory 'pulsesync_hotkeys.exe'
if (Test-Path -LiteralPath $directory) {
    $item = Get-Item -LiteralPath $directory -Force
    if (!$item.PSIsContainer -or ($item.Attributes -band [IO.FileAttributes]::ReparsePoint)) {
        throw 'Invalid helper directory'
    }
}

if ($env:PULSESYNC_HOTKEYS_REMOVE -eq '1') {
    if ($existing) {
        if ($existing.GetInstances(0).Count) { $existing.Stop(0) }
    }
    if ([IO.Directory]::Exists($directory)) {
        for ($attempt = 0; ; $attempt++) {
            try {
                [IO.File]::Delete($helper)
                break
            } catch {
                $failure = $_.Exception.GetBaseException()
                if ($attempt -ge 10 -or ($failure.HResult -band 0xffff) -notin 32, 33) { throw }
                Start-Sleep -Milliseconds 100
            }
        }
    }
    if ([IO.Directory]::Exists($directory)) { [IO.Directory]::Delete($directory) }
    if ($existing) { $tasks.DeleteTask($taskName, 0) }
    exit 0
}

if (!(Test-Path -LiteralPath $directory)) {
    New-Item -Path $directory -ItemType Directory | Out-Null
}
$directoryAcl = Get-Acl -LiteralPath $directory
$directoryAcl.SetSecurityDescriptorSddlForm(('O:BAG:BAD:P(A;OICI;FA;;;SY)(A;OICI;FA;;;BA)(A;OICI;FRFX;;;{0})' -f $sid))
Set-Acl -LiteralPath $directory -AclObject $directoryAcl

$stage = Join-Path $directory ([Guid]::NewGuid().ToString('N') + '.tmp')
try {
    [IO.File]::Copy($env:PULSESYNC_HOTKEYS_INSTALLER, $stage)
    if ($existing -and $existing.GetInstances(0).Count) { $existing.Stop(0) }
    if ([IO.File]::Exists($helper)) {
        [IO.File]::Replace($stage, $helper, $null)
    } else {
        [IO.File]::Move($stage, $helper)
    }

    $definition = $scheduler.NewTask(0)
    $definition.RegistrationInfo.Description = 'PulseSync global keyboard shortcuts'
    $definition.Principal.UserId = $sid
    $definition.Principal.LogonType = 3
    $definition.Principal.RunLevel = 1
    $definition.Settings.AllowDemandStart = $true
    $definition.Settings.DisallowStartIfOnBatteries = $false
    $definition.Settings.StopIfGoingOnBatteries = $false
    $definition.Settings.ExecutionTimeLimit = 'PT0S'
    $definition.Settings.Hidden = $false
    $action = $definition.Actions.Create(0)
    $action.Path = $helper
    $action.Arguments = 'listen'
    $action.WorkingDirectory = $directory
    $descriptor = 'O:BAG:BAD:P(A;;GA;;;SY)(A;;GA;;;BA)(A;;GRGX;;;{0})' -f $sid
    # CREATE_OR_UPDATE | DONT_ADD_PRINCIPAL_ACE. The filtered token can read and run the task.
    $tasks.RegisterTaskDefinition($taskName, $definition, 22, $sid, $null, 3, $descriptor) | Out-Null
} finally {
    [IO.File]::Delete($stage)
}
