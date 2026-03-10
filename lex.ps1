param(
    [Parameter(Mandatory=$false, Position=0)]
    [string]$Command,

    [Parameter(Mandatory=$false, Position=1)]
    [string]$Target
)

$LexDir = $PSScriptRoot
$TemplatesDir = Join-Path $LexDir "templates"

switch ($Command) {
    "search" {
        Write-Host "--- LEX Search Results ---" -ForegroundColor Cyan
        if (-not $Target) {
            Get-ChildItem $TemplatesDir -Filter "*.md" | Select-Object Name, @{Name="Category"; Expression={(Get-Content $_.FullName | Select-String "name:").Line}}
        } else {
            Select-String -Path "$TemplatesDir\*.md" -Pattern $Target | Select-Object -Unique Filename, LineNumber, Line
        }
    }
    "get" {
        if (-not $Target) { Write-Error "Target required for 'get' command."; return }
        $FilePath = Join-Path $LexDir $Target
        if (Test-Path $FilePath) {
            Get-Content $FilePath
        } else {
            Write-Error "File $Target not found in LEX directory."
        }
    }
    "verify" {
        Write-Host "--- LEX Verified References ---" -ForegroundColor Green
        Get-Content (Join-Path $LexDir "findings.md") | Select-String "http"
    }
    "list-eu" {
        Write-Host "--- LEX EU 27 Member State Databases ---" -ForegroundColor Blue
        $Findings = Get-Content (Join-Path $LexDir "findings.md")
        $Start = $false
        foreach ($Line in $Findings) {
            if ($Line -match "Individual EU Member State Databases") { $Start = $true; continue }
            if ($Start -and $Line -match "\|") { Write-Host $Line }
        }
    }
    "help" {
        Write-Host "LEX: Legal-Entity-X-ref CLI" -ForegroundColor Yellow
        Write-Host "Usage:"
        Write-Host "  lex search [pattern]  - Search across jurisdictional templates"
        Write-Host "  lex get [path]        - Retreive specific template or document"
        Write-Host "  lex verify            - List all verified government references"
        Write-Host "  lex list-eu           - List official databases for all 27 EU nations"
    }
    Default {
        Write-Host "Unknown command. Use 'lex help' for usage."
    }
}
