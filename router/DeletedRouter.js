const express=require('express')
const router=express.Router()

const {View,Delete}= require('../controller/Deleted')
router.get('/view',View)
router.delete('/delete',Delete)

module.exports=router