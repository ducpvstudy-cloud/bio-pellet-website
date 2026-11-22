$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$fontDirectory = Join-Path $projectRoot 'public/fonts'
New-Item -ItemType Directory -Force -Path $fontDirectory | Out-Null
$sourcePath = Join-Path $fontDirectory 'google-fonts-source.css'
$fontUrl = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&family=Lora:ital,wght@1,400..500&display=swap'
$browserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
& curl.exe --silent --show-error --location --fail --max-time 25 --user-agent $browserAgent $fontUrl --output $sourcePath
if ($LASTEXITCODE -ne 0) { throw 'Font stylesheet download failed.' }
$source = Get-Content -LiteralPath $sourcePath -Raw
$blocks = [regex]::Matches($source, '(?s)/\*\s*(vietnamese|latin)\s*\*/\s*(@font-face\s*\{.*?\})')
if ($blocks.Count -lt 4) { throw 'Expected Latin and Vietnamese WOFF2 subsets for both families.' }
$localBlocks = @()
foreach ($match in $blocks) {
  $subset = $match.Groups[1].Value
  $block = $match.Groups[2].Value
  $family = [regex]::Match($block, "font-family:\s*'([^']+)'").Groups[1].Value.ToLower()
  $remoteUrl = [regex]::Match($block, 'url\(([^)]+)\)').Groups[1].Value
  if (-not $remoteUrl.StartsWith('https://fonts.gstatic.com/')) { throw 'Unexpected font host.' }
  $filename = $family + '-' + $subset + '.woff2'
  & curl.exe --silent --show-error --location --fail --max-time 25 $remoteUrl --output (Join-Path $fontDirectory $filename)
  if ($LASTEXITCODE -ne 0) { throw ('Font download failed: ' + $filename) }
  $localBlocks += ('/* ' + $family + ': ' + $subset + ' */' + [Environment]::NewLine + $block.Replace($remoteUrl, '/fonts/' + $filename))
  Write-Output $filename
}
$localCss = '/* Self-hosted Google Fonts: Manrope and Lora, OFL licenses in public/fonts. */' + [Environment]::NewLine + ($localBlocks -join ([Environment]::NewLine + [Environment]::NewLine))
[System.IO.File]::WriteAllText((Join-Path $projectRoot 'src/app/fonts.css'), $localCss, (New-Object System.Text.UTF8Encoding $false))
foreach ($family in @('manrope','lora')) {
  $licenseUrl = 'https://raw.githubusercontent.com/google/fonts/main/ofl/' + $family + '/OFL.txt'
  & curl.exe --silent --show-error --location --fail --max-time 25 $licenseUrl --output (Join-Path $fontDirectory ($family + '-OFL.txt'))
  if ($LASTEXITCODE -ne 0) { throw ('License download failed: ' + $family) }
}
