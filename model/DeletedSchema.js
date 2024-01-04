const mongoose = require('mongoose')
const { Schema } = mongoose;
const DelSchema = new Schema({
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
        type: String
    }
})
module.exports = mongoose.model("Deleted", DelSchema)