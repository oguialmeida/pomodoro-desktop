// The app module controls life cycle elements of its application
// The BrowserWindow module creates and manages the application windows
const { app, BrowserWindow } = require('electron')
const path = require('path')

// Load the HTML file in a new browserwindow instance
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./src/index.html')
}

// Windows can only be created after the app module trigger Ready (Use of Promise)
app.whenReady().then(() => {
    createWindow()

    // If open without a window, this will create a new window
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Close the window in the way right on Mac
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})