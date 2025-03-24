# 加载MCP环境变量脚本
# 使用方法：在启动Cursor前，在PowerShell中运行: .\load-env.ps1

Write-Host "正在加载MCP环境变量..." -ForegroundColor Cyan

$envFile = Join-Path $PSScriptRoot ".env"
if (-not (Test-Path $envFile)) {
    Write-Host "错误：找不到.env文件，请确保该文件存在于项目根目录" -ForegroundColor Red
    exit 1
}

# 读取.env文件并设置环境变量
Get-Content $envFile | ForEach-Object {
    if (-not [string]::IsNullOrWhiteSpace($_) -and -not $_.StartsWith("#")) {
        $key, $value = $_ -split '=', 2
        if (-not [string]::IsNullOrWhiteSpace($key) -and -not [string]::IsNullOrWhiteSpace($value)) {
            [Environment]::SetEnvironmentVariable($key.Trim(), $value.Trim(), "Process")
            Write-Host "已设置: $($key.Trim())" -ForegroundColor Green
        }
    }
}

Write-Host "`nMCP环境变量加载完成！" -ForegroundColor Cyan
Write-Host "现在您可以启动Cursor并使用MCP服务了。" -ForegroundColor Yellow