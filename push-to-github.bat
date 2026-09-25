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
git commit -m "feat: complete Bangladesh Import & Inventory ERP with Quotation module"
echo.
echo Pushing to GitHub (main branch)...
echo If prompted for Username, enter: sohelsr24
echo If prompted for Password, enter your GitHub Personal Access Token (classic)
echo.
git push -u origin main

echo.
echo ======================================================================
echo Done! Once authenticated, credentials are saved in Windows.
echo ======================================================================
pause
