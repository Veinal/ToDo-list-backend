const mongoose = require('mongoose')
const { Schema } = mongoose
const StarSchema = new Schema({
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
module.exports = mongoose.model("Starred", StarSchema)