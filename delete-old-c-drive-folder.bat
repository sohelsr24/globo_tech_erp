@echo off
chcp 65001 >nul
title Delete Old C Drive Project Folder
color 0a
echo ======================================================================
echo    GLOBO TECH ERP - CLEANUP OLD C-DRIVE FOLDER
echo    Target: "C:\Users\Sohel\OneDrive\Desktop\My projet"
echo ======================================================================
echo.

:retry
rmdir /s /q "C:\Users\Sohel\OneDrive\Desktop\My projet" >nul 2>&1

if exist "C:\Users\Sohel\OneDrive\Desktop\My projet" (
    echo [অপেক্ষা করছি...] পুরাতন Antigravity IDE উইন্ডোটি এখনও C ড্রাইভে ওপেন আছে।
    echo অনুগ্রহ করে পুরাতন Antigravity IDE উইন্ডোটি (C Drive) বন্ধ করে দিন।
    echo.
    echo পুরাতন উইন্ডো বন্ধ করলেই ৩ সেকেন্ডের মধ্যে ফোল্ডারটি স্বয়ংক্রিয়ভাবে ডিলিট হয়ে যাবে...
    timeout /t 3 /nobreak >nul
    goto retry
) else (
    echo.
    echo ======================================================================
    echo [সফল] পুরাতন C ড্রাইভের ফোল্ডারটি সম্পূর্ণ ডিলিট করা হয়েছে!
    echo আপনার প্রোজেক্টটি এখন সম্পূর্ণ নিরাপদে D:\Globo Tech\ERP তে রয়েছে।
    echo ======================================================================
    echo.
    pause
)
