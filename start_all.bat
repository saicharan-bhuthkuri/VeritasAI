@echo off
echo Starting AI Detector Application...

start "Backend Server" cmd /k "call run_backend.bat"
start "Frontend Server" cmd /k "call run_frontend.bat"

echo.
echo Application starting!
echo Backend: http://localhost:8000
echo Frontend: http://localhost:5173
echo.
pause
