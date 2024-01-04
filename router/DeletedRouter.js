const express=require('express')
const router=express.Router()

const {View,Delete, Restore}= require('../controller/Deleted')
router.get('/view',View)
router.delete('/delete/:id',Delete)
router.delete('/restore/:id',Restore)

module.exports=router