const multer = require('multer')
const path = require('path')
// 

const storage = multer.diskStorage({
    
    destination: path.join(__dirname, '../../public/data/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, 'Products' + path.extname(file.originalname));
    }
})

module.exports = storage