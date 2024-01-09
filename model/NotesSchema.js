const mongoose = require('mongoose')
const { Schema } = mongoose;
const NotesSchema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default:'unarchived'
    }
})
module.exports=mongoose.model("Notes",NotesSchema)