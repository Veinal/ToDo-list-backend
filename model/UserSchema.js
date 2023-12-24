const mongoose = require('mongoose')
const { Schema } = mongoose
const UserSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    picture: {
        type: String,
    }
})
module.exports=mongoose.model("user",UserSchema)