const express=require('express')
const router=express.Router()

const {Insert,View,SingleView,Delete,Update}= require('../controller/Notes')
router.post('/insert',Insert)
router.get('/view',View)
router.get('/singleview',SingleView)
router.delete('/delete',Delete)
router.put('/update',Update)

module.exports=router