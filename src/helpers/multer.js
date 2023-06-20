const multer = require('multer')
const path = require('path')
const newFileFormatter = require('./nameFileFormatter')
const Logger = require('../logs/model/log4js.model')
// 

const storage = multer.diskStorage({
    
    destination: path.join(__dirname, '../../public/data/uploads'),
    filename: (req, file, cb, filename) => {
        const newName = newFileFormatter(file.originalname)

        if (newName === false) {
            return Logger.error(`Bad file uploaded, ${file.originalname}.`)
        }

        cb(null, newName + path.extname(file.originalname))
        Logger.info(`File changed, the file is ${file.originalname} and is saved as ${newName+path.extname(file.originalname)}.`)
        
    }
})

module.exports = storage