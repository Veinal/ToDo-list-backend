const mongoose = require('mongoose')
const { Schema } = mongoose;
const ArchSchema = new Schema({
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
module.exports = mongoose.model("Archived", ArchSchema)