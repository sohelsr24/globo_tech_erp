@echo off
title Globo Tech Enterprise ERP - Bangladesh
color 0b
echo ======================================================================
echo          GLOBO TECH ENTERPRISE ERP - PRODUCTION SYSTEM
echo ======================================================================
echo.
echo  [PERSISTENCE GUARANTEE]
echo  - Your data (Quotations, Bills, Products, Stock, Serials, Customers)
echo    is automatically saved to your disk and browser storage.
echo  - Turning off or restarting your PC will NOT cause any data loss.
echo.
echo Starting Local Server on http://localhost:3000 ...
echo.

set "PATH=C:\Users\Sohel\.bin\node-v20.18.0-win-x64;%PATH%"
set "NEXT_TELEMETRY_DISABLED=1"

start http://localhost:3000
call npm run dev -- -p 3000

pause
