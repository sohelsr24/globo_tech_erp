@echo off
title Apex Enterprise ERP - Bangladesh
color 0b
echo ======================================================================
echo          APEX ENTERPRISE ERP - PRODUCTION SYSTEM (BANGLADESH)
echo ======================================================================
echo.
echo Starting Local Next.js Dev Server on http://localhost:3000 ...
echo.

set "PATH=C:\Users\Sohel\.bin\node-v20.18.0-win-x64;%PATH%"
set "NEXT_TELEMETRY_DISABLED=1"

start http://localhost:3000
npm run dev

pause
