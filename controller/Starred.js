const StarSchema=require('../model/StarredSchema')
const View=async(req,res)=>{
    try{
        const data=await StarSchema.find()
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
        let data=await StarSchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this id")
            return res.status(404).json("data does not exist with this ID")
        }
        else{
            data=await StarSchema.findByIdAndDelete(req.params.id)
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