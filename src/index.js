const {app, BrowserWindow, session} = require('electron')
const path = require('path')

require('./config')
const isDev = process.env.APP_ENV === 'dev'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit()
}

const _onReady = async () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    mainWindow.maximize()
    const url = process.env.HOST_APP_URL || 'http://localhost:6100'
    await mainWindow.loadURL(url)

    // Open the DevTools.
    if (isDev) {
        mainWindow.webContents.openDevTools()
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', _onReady)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        _onReady()
    }
})

