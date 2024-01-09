const express=require('express')
const router=express.Router()
const user=require('../middleware/User')

const {Insert,View,Delete}= require('../controller/Archived')
router.post('/insert',user,Insert)
router.get('/view',user,View)
router.delete('/delete/:id',Delete)

module.exports=router