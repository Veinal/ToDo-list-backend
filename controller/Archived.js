const ArchSchema=require('../model/ArchivedSchema')
const View=async(req,res)=>{
    try{
        const data=await ArchSchema.find()
        console.log(data)
        res.json(data)
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}
const Delete=async(req,res)=>{
    try{
        let data=await ArchSchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this id")
            return res.status(404).json("data does not exist with this ID")
        }
        else{
            data=await ArchSchema.findByIdAndDelete(req.params.id)
            console.log("Data deleted successfully")
            res.json({"Success":true,"Deleted Data":data})
        }
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}
module.exports={View,Delete}