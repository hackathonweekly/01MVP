@echo off
echo 正在加载MCP环境变量并启动Cursor...
powershell -ExecutionPolicy Bypass -File "%~dp0load-env.ps1"
start "" "C:\Users\10949\AppData\Local\Programs\Cursor\Cursor.exe"
echo Cursor已启动！