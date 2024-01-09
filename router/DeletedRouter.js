const express = require('express')
const router = express.Router()
const user = require('../middleware/User')

const { View, Delete, Insert } = require('../controller/Deleted')
router.post('/insert', Insert)
router.get('/view', user, View)
router.delete('/delete/:id', Delete)

module.exports = router