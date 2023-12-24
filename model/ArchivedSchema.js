const mongoose = require('mongoose')
const { Schema } = mongoose;
const ArchSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }

})
module.exports = mongoose.model("Archived", ArchSchema)