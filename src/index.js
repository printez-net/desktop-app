require('./config')
const {app} = require('electron')
const _onReady = require('./_onReady')


if (require('electron-squirrel-startup')) {
    app.quit()
}

app.on('ready', _onReady)
app.on('window-all-closed', () => {
    app.quit()
})

