const mongoose = require('mongoose')
const { Schema } = mongoose;
const DelSchema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    notes_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Notes"
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
})
module.exports = mongoose.model("Deleted", DelSchema)