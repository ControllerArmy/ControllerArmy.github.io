<#
  RESIZE PHOTOS FOR THE GALLERY
  ---------------------------------------------------------------------------
  Camera files (5000+ px, 15-25 MB) look grainy in the grid and are far too
  heavy for a website. This makes small, sharp copies for the site.

  1. Put full-size photos in the  originals\  folder (it is NOT uploaded).
  2. Run this from the project folder:
       powershell -ExecutionPolicy Bypass -File tools\resize-photos.ps1
     (or right-click this file > Run with PowerShell)
  3. Add a line for each new photo to GALLERY in js\main.js, using the
     file name this script prints.

  For each photo it writes:
    assets\gallery\<name>.jpg          2400 px long edge  (full-screen viewer)
    assets\gallery\thumbs\<name>.jpg   1600 px long edge  (grid)
  File names are lowercased with spaces turned into dashes.
  Photos that haven't changed since the last run are skipped.

  Windows only (uses the image tools built into Windows PowerShell).
#>
param(
  [string]$Source = "",           # folder of full-size photos; default: originals\
  [int]$FullSize = 2400,
  [int]$ThumbSize = 1600,
  [long]$FullQuality = 82,        # JPEG quality, 0-100
  [long]$ThumbQuality = 78,
  [switch]$NoPause
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
if (-not $Source) { $Source = Join-Path $root "originals" }
$fullDir = Join-Path $root "assets\gallery"
$thumbDir = Join-Path $fullDir "thumbs"
New-Item -ItemType Directory -Force -Path $Source, $thumbDir | Out-Null

$jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }

function Save-Resized($image, [string]$path, [int]$longEdge, [long]$quality) {
  $scale = [Math]::Min(1.0, $longEdge / [Math]::Max($image.Width, $image.Height))
  $w = [int][Math]::Round($image.Width * $scale)
  $h = [int][Math]::Round($image.Height * $scale)

  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  # Mirror edge pixels while resampling so the borders don't get a faint dark line.
  $attrs = New-Object System.Drawing.Imaging.ImageAttributes
  $attrs.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)
  $dest = New-Object System.Drawing.Rectangle 0, 0, $w, $h
  $g.DrawImage($image, $dest, 0, 0, $image.Width, $image.Height, [System.Drawing.GraphicsUnit]::Pixel, $attrs)

  $params = New-Object System.Drawing.Imaging.EncoderParameters 1
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, $quality)
  $bmp.Save($path, $jpeg, $params)

  $attrs.Dispose(); $g.Dispose(); $bmp.Dispose()
}

$files = @(Get-ChildItem $Source -File | Where-Object { $_.Extension -match '^\.(jpe?g|png)$' })
if ($files.Count -eq 0) {
  Write-Host "No photos found in $Source. Put your full-size photos there and run this again."
}

foreach ($file in $files) {
  $slug = ([IO.Path]::GetFileNameWithoutExtension($file.Name).ToLower() -replace '[^a-z0-9]+', '-').Trim('-')
  $name = "$slug.jpg"
  $fullPath = Join-Path $fullDir $name
  $thumbPath = Join-Path $thumbDir $name

  if ((Test-Path $fullPath) -and (Test-Path $thumbPath) -and ((Get-Item $thumbPath).LastWriteTime -gt $file.LastWriteTime)) {
    Write-Host "  skip  $name (already up to date)"
    continue
  }

  $image = [System.Drawing.Image]::FromFile($file.FullName)
  try {
    # Phones store rotation as a flag instead of rotating the pixels.
    if ($image.PropertyIdList -contains 0x0112) {
      $orientation = [int][BitConverter]::ToUInt16($image.GetPropertyItem(0x0112).Value, 0)
      $rotations = @{ 2 = "RotateNoneFlipX"; 3 = "Rotate180FlipNone"; 4 = "Rotate180FlipX"; 5 = "Rotate90FlipX"; 6 = "Rotate90FlipNone"; 7 = "Rotate270FlipX"; 8 = "Rotate270FlipNone" }
      if ($rotations.ContainsKey($orientation)) {
        $image.RotateFlip([System.Drawing.RotateFlipType]$rotations[$orientation])
      }
    }

    # Browsers assume sRGB. Other profiles (Adobe RGB, P3) would look washed out.
    if ($image.PropertyIdList -contains 0x8773) {
      $profile = [Text.Encoding]::ASCII.GetString($image.GetPropertyItem(0x8773).Value)
      if (-not $profile.Contains("sRGB")) {
        Write-Warning "$($file.Name) isn't sRGB. Re-export it as sRGB or its colors may look dull online."
      }
    }

    if ([Math]::Max($image.Width, $image.Height) -lt $FullSize) {
      Write-Warning "$($file.Name) is only $($image.Width)x$($image.Height); it may look soft full screen. Use a larger export if you have one."
    }

    Save-Resized $image $fullPath $FullSize $FullQuality
    Save-Resized $image $thumbPath $ThumbSize $ThumbQuality
  }
  finally {
    $image.Dispose()
  }

  $fullKB = [Math]::Round((Get-Item $fullPath).Length / 1KB)
  $thumbKB = [Math]::Round((Get-Item $thumbPath).Length / 1KB)
  Write-Host ("  done  {0,-28} {1,5} KB  (thumb {2} KB)   src: ""assets/gallery/{0}""" -f $name, $fullKB, $thumbKB)
}

if (-not $NoPause -and $Host.Name -eq "ConsoleHost" -and [Environment]::UserInteractive) {
  Read-Host "`nFinished. Press Enter to close"
}
