$ff = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\bin\ffmpeg.exe'
$ff = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffprobe.exe'
$info = & $ff -v quiet -print_format json -show_streams 'C:\Users\User\Desktop\SNAPOST\SITO\Snapost Demo _nosound.mp4' | ConvertFrom-Json
$v = $info.streams | Where-Object { $_.codec_type -eq 'video' } | Select-Object -First 1
"codec: $($v.codec_name)  wxh: $($v.width)x$($v.height)  durata: $($v.duration)s  fps: $($v.r_frame_rate)"
