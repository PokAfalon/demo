@echo off
setlocal
cd /d "%~dp0"

echo =============================================
echo DOKY Next.js demo inditasa
echo =============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo HIBA: A Node.js nincs telepitve.
  echo Telepits Node.js 20.9 vagy ujabb LTS verziot, majd inditsd ujra ezt a fajlt.
  pause
  exit /b 1
)

echo Node.js verzio:
node -v
echo.

if not exist "node_modules\next\package.json" (
  echo A csomagok telepitese most indul. Ez elso alkalommal nehany perc lehet...
  call npm install
  if errorlevel 1 (
    echo.
    echo HIBA: Az npm install nem sikerult. A fenti hibauzenetet kell megnezni.
    pause
    exit /b 1
  )
)

if exist ".next" (
  echo Korabbi Next.js gyorsitotar torlese...
  rmdir /s /q ".next"
)

echo.
echo Amikor megjelenik a Ready uzenet, mindket cim hasznalhato:
echo http://localhost:3000
echo http://127.0.0.1:3000
echo.
call npm run dev

echo.
echo A fejlesztoi szerver leallt.
pause
