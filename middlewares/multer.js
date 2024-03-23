const multer = require('multer')
const path = require('path')

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../images'))
  },
  filename: (req, file, cb) => {
    const fileName =
      file.fileName + '-' + Date.now() + path.extname(file.originalname)
    cb(null, fileName)
  }
})

const multerMiddleware = multer({ storage: diskStorage }).single('photo')

module.exports = multerMiddleware
