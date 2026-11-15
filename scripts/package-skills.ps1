# scripts/package-skills.ps1
param(
    [string]$SkillsDir = "$PSScriptRoot\..\skills",
    [string]$DistDir = "$PSScriptRoot\..\dist"
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$SkillsDir = (Resolve-Path $SkillsDir).Path
if (-not (Test-Path $DistDir)) {
    New-Item -ItemType Directory -Path $DistDir -Force | Out-Null
}
$DistDir = (Resolve-Path $DistDir).Path

Write-Host "📦 Packaging skills from $SkillsDir to $DistDir..." -ForegroundColor Cyan

Get-ChildItem -Path $SkillsDir -Directory | ForEach-Object {
    $skillName = $_.Name
    $skillSrc = $_.FullName
    $destFile = Join-Path $DistDir "$skillName.skill"

    if (Test-Path $destFile) {
        Remove-Item $destFile -Force
    }

    $zip = [System.IO.Compression.ZipFile]::Open($destFile, [System.IO.Compression.ZipArchiveMode]::Create)
    
    Get-ChildItem -Path $skillSrc -Recurse -File | ForEach-Object {
        $relPath = $_.FullName.Substring($skillSrc.Length).TrimStart('\', '/').Replace('\', '/')
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $relPath) | Out-Null
    }
    
    $zip.Dispose()

    $sizeKb = [math]::Round((Get-Item $destFile).Length / 1KB, 1)
    Write-Host "✅ Built: $skillName.skill ($sizeKb KB)" -ForegroundColor Green
}

Write-Host "`n🎉 Packaging complete! All packages built in $DistDir with forward slashes." -ForegroundColor Green
