@echo off
setlocal
cd /d "%~dp0"

echo A regi telepites es gyorsitotar torlese...
if exist ".next" rmdir /s /q ".next"
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del /q "package-lock.json"

echo Csomagok ujratelepitese...
call npm cache verify
call npm install
if errorlevel 1 (
  echo HIBA: Az npm install nem sikerult.
  pause
  exit /b 1
)

echo.
echo Amikor megjelenik a Ready uzenet, mindket cim hasznalhato:
echo http://localhost:3000
echo http://127.0.0.1:3000
echo.
call npm run dev
pause
