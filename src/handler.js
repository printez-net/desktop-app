const {ipcMain, dialog} = require('electron')


module.exports = async (mainWindow) => {
    ipcMain.handle('openDirectory', async (event, args) => {
        const {title} = Object.assign({}, args)
        const vTitle = title || 'Select a folder'

        return dialog.showOpenDialog(mainWindow, {
            title: vTitle,
            properties: ['openDirectory', 'createDirectory'],

        })
    })
}
