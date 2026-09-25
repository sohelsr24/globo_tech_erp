@echo off
title Push to GitHub - globo_tech_erp
color 0a
echo ======================================================================
echo          PUSHING GLOBO TECH ERP TO GITHUB
echo          Repository: https://github.com/sohelsr24/globo_tech_erp
echo ======================================================================
echo.

set "PATH=C:\Users\Sohel\.bin\git\cmd;C:\Users\Sohel\.bin\node-v20.18.0-win-x64;%PATH%"

git add .
git commit -m "update: latest erp updates"
git push origin main

echo.
echo ======================================================================
echo Successfully pushed to GitHub!
echo ======================================================================
pause
