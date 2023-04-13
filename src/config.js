const fileName = process.env.NODE_ENV === 'production' ? 'production.env' : '.env'

require('dotenv').config({
    path: require('path').resolve(__dirname, '..', fileName)
})
