require('./config')
const {app, BrowserWindow} = require('electron')
const _onReady = require('./_onReady')


if (require('electron-squirrel-startup')) {
    app.quit()
}

app.on('ready', _onReady)
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
