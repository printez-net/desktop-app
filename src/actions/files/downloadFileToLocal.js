const {mkdirp} = require('mkdirp')
const downloadFile= require('../../utils/downloadFile')


module.exports = async (args) => {
    const {url, folder, name} = Object.assign({}, args)

    if (!url) {
        throw new Error('URL is empty')
    }

    if (!folder) {
        throw new Error('Folder is required.')
    }

    if (!name) {
        throw new Error('File name is required.')
    }

    console.log('Download file url:', url)
    console.log('To folder:', folder)
    console.log('With name:', name)

    await mkdirp(folder)
    const filePath = `${folder}/${name}`
    await downloadFile(url, filePath)

    return true
}

