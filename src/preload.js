const {contextBridge, ipcRenderer} = require('electron')


const listHandlers = [
    'openDirectory',
    'saveFile',
    'openFinder',
]

const api = {
    isDesktop: true,
}

listHandlers.forEach(handlerName => {
    api[handlerName] = (...args) => ipcRenderer.invoke(handlerName, ...args)
})

contextBridge.exposeInMainWorld('desktopApp', api)
