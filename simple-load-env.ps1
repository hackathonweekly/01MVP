# 简化版环境变量加载脚本
Write-Host "正在加载MCP环境变量..." -ForegroundColor Cyan

# 手动设置环境变量
[Environment]::SetEnvironmentVariable("GITHUB_PERSONAL_ACCESS_TOKEN", "ghp_7C893ODvpMTmdhW4DGw37zRfK2wbPt1R4jQQc", "Process")
Write-Host "已设置: GITHUB_PERSONAL_ACCESS_TOKEN" -ForegroundColor Green

[Environment]::SetEnvironmentVariable("FIRECRAWL_API_KEY", "fc-fd6401e94bf14aa7bc955607a0d69d8a", "Process")
Write-Host "已设置: FIRECRAWL_API_KEY" -ForegroundColor Green

Write-Host "`nMCP环境变量加载完成！" -ForegroundColor Cyan