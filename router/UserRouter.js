const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/Users')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

const { Register, Login, View, SingleView } = require('../controller/User')
router.post('/register', upload.single('image'), Register)
router.post('/login', Login)
router.get('/view', View)
router.get('/singleview', SingleView)

module.exports = router