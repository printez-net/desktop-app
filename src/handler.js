const {ipcMain, dialog, shell} = require('electron')
const downloadFileToLocal = require('./actions/files/downloadFileToLocal')


module.exports = async (mainWindow) => {
    ipcMain.handle('openDirectory', async (event, args) => {
        const {title} = Object.assign({}, args)
        const vTitle = title || 'Select a folder'

        return dialog.showOpenDialog(mainWindow, {
            title: vTitle,
            properties: ['openDirectory', 'createDirectory'],
        })
    })

    ipcMain.handle('saveFile', async (event, args) => {
        await downloadFileToLocal(args)

        return true
    })

    ipcMain.handle('openFinder', async (event, args) => {
        const {path} = Object.assign({}, args)
        if (!path) return false

        await shell.openPath(path)
        return true
    })
}
