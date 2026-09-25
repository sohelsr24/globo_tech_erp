@echo off
title Push to GitHub - globo_tech_erp
color 0a
echo ======================================================================
echo          BUILDING & PUSHING GLOBO TECH ERP TO GITHUB
echo          Repository: https://github.com/sohelsr24/globo_tech_erp
echo ======================================================================
echo.

set "PATH=C:\Users\Sohel\.bin\git\cmd;C:\Users\Sohel\.bin\node-v20.18.0-win-x64;%PATH%"

echo [1/3] Building Next.js static export...
call npm run build

echo [2/3] Syncing export files to web root...
copy /Y out\index.html index.html
copy /Y out\404.html 404.html
copy /Y out\index.txt index.txt
if exist _next rmdir /s /q _next
xcopy /E /I /Y out\_next _next

echo [3/3] Committing and pushing to GitHub...
git add .
git commit -m "deploy: update live build and sync latest changes"
git push origin main

echo.
echo ======================================================================
echo Successfully built and pushed to GitHub!
echo Your Hostinger live server can now deploy the latest changes!
echo ======================================================================
pause
