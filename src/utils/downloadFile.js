const fs = require("fs-extra")
const axios = require("axios")


module.exports = async (url, filePath) => {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    const writeStream = fs.createWriteStream(filePath)
    response.data.pipe(writeStream)

    return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve)
        writeStream.on('error', reject)
    })
}
