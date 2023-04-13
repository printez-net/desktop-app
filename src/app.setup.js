const {app} = require('electron')
const path = require('path')


module.exports = () => {
    app.setName('PrintEZ')

    const iconPath = path.join(__dirname, '../assets/images/logo.png')
    app.dock.setIcon(iconPath)
}

