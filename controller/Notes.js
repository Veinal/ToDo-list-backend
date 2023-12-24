const NotesSchema =require('../model/NotesSchema')
const Insert = async(req,res)=>{
    try{
        const {name,description,date,status}=req.body;
    const data =await new NotesSchema({name,description,date,status})
    const savedData=await data.save()
    console.log("insertion success")
    res.send({"insertion successful":true,savedData})
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}

const View=async(req,res)=>{
    try{
        const data=await NotesSchema.find()
        console.log(data)
        res.json(data)
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}

const SingleView=async(req,res)=>{
    try{
        const data=await NotesSchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this id")
            return res.status(404).json("data does not exist with this id")
        }else{
            console.log(data)
            res.json(data)
        }
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}

const Delete=async(req,res)=>{
    try{
        let data=await NotesSchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this id")
            return res.status(404).json("data does not exist with this ID")
        }
        else{
            data=await NotesSchema.findByIdAndDelete(req.params.id)
            console.log("Data deleted successfully")
            res.json({"Success":true,"Deleted Data":data})
        }
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}

const Update=async(req,res)=>{
    const {name,description,date,status}=req.body
    try{
        const newData={}
        if(name){newData.name=name}
        if(description){newData.description=description}
        if(date){newData.date=date}
        if(status){newData.status=status}

        let data =await NotesSchema.findById(req.params.id)
        if(!data){
            console.log("Data not found with this id")
            return res.status(404).json("Data does not exist with this ID")
        }else{
            data = await NotesSchema.findByIdAndUpdate(req.params.id,{$set:newData})
            console.log("Updated data"+data)
            res.json({data})
        }
    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!")
    }
}
module.exports={Insert,View,SingleView,Delete,Update}