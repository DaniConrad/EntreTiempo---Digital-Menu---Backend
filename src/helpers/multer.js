const multer = require('multer')
const path = require('path')
const newFileFormatter = require('./nameFileFormatter')
// 

const storage = multer.diskStorage({
    
    destination: path.join(__dirname, '../../public/data/uploads'),
    filename: (req, file, cb, filename) => {
        const newName = newFileFormatter(file.originalname)

        cb(null, newName + path.extname(file.originalname))
    }
})

module.exports = storage