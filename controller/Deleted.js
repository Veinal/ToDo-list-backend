const DelSchema = require('../model/DeletedSchema')
const NotesSchema = require('../model/NotesSchema') //to restore the deleted note

const Insert=async(req,res)=>{
    try{
        const {notes_id,date,status}=req.body;
        const data = await new DelSchema({notes_id:notes_id,date,status})
        const savedData=data.save()
        console.log("insertion success")
        res.send({"insertion successful":true,savedData})
    }
    catch(err){
        console.log("some error occured!!!"+err)
        res.status(500).send("some internal error")
    }
}
const View = async (req, res) => {
    try {
        const data = await DelSchema.find().populate("notes_id")
        console.log(data)
        res.json(data)
    }
    catch (error) {
        console.error("some error occured" + error);
        res.status(500).json("some internal error!!")
    }
}
const Delete = async (req, res) => {
    try {
        let data = await DelSchema.findById(req.params.id)
        if (!data) {
            console.log("data not found with this id")
            return res.status(404).json("data does not exist with this ID")
        }
        else {
            data = await DelSchema.findByIdAndDelete(req.params.id)
            console.log("Data deleted successfully")
            res.json({ "Success": true, "Deleted Data": data })
        }
    }
    catch (error) {
        console.error("some error occured" + error);
        res.status(500).json("some internal error!!")
    }
}



module.exports = { View, Delete, Insert }