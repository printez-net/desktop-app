require('./config')
const {app} = require('electron')
const _onReady = require('./_onReady')
const setup = require('./app.setup')


if (require('electron-squirrel-startup')) {
    app.quit()
}

app.on('ready', _onReady)
app.on('window-all-closed', () => {
    app.quit()
})

setup()

