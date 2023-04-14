const {contextBridge, ipcRenderer} = require('electron')


const listHandlers = [
    'openDirectory',
    'saveFile',
    'openFinder',
]

const handlers = {}
listHandlers.forEach(handlerName => {
    handlers[handlerName] = (...args) => ipcRenderer.invoke(handlerName, ...args)
})

contextBridge.exposeInMainWorld('desktopApp', {
    isDesktop: true,
    handlers
})
