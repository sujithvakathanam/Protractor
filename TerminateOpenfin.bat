taskkill /f /im "openfin.exe"
taskkill /f /im "OpenFinRVM.exe"
rmdir /s/q %userprofile%\AppData\Local\OpenFin\apps
rmdir /s/q %userprofile%\AppData\Local\OpenFin\cache
rmdir /s/q %userprofile%\AppData\Local\OpenFin\logs