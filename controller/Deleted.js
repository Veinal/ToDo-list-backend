const DelSchema=require('../model/DeletedSchema')
const NotesSchema =require('../model/NotesSchema') //to restore the deleted note

const View=async(req,res)=>{
    try{
        const data=await DelSchema.find()
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
        let data=await DelSchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this id")
            return res.status(404).json("data does not exist with this ID")
        }
        else{
            data=await DelSchema.findByIdAndDelete(req.params.id)
            console.log("Data deleted successfully")
            res.json({"Success":true,"Deleted Data":data})
        }
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}

const Restore=async(req,res)=>{
    try{
        let data=await DelSchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this id")
            return res.status(404).json("data does not exist with this ID")
        }
        else{
            const restoreNote=new NotesSchema({
                name:data.name,
                description:data.description,
                date:data.date,
                status:data.status
            })
            await restoreNote.save()

            data=await DelSchema.findByIdAndDelete(req.params.id)
            console.log("Data deleted successfully")
            res.json({"Success":true,"Deleted Data":data})
        }
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}

module.exports={View,Delete,Restore}