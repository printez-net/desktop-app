const {BrowserWindow} = require("electron")
const path = require("path")
const handler = require('./handler')


const appUrl = process.env.HOST_APP_URL || 'http://localhost:6100'
const iconPath = path.join(__dirname, '../assets/images/logo.png')


module.exports = async () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        icon: iconPath
    })

    await handler(mainWindow)

    mainWindow.maximize()
    await mainWindow.loadURL(appUrl)
}
