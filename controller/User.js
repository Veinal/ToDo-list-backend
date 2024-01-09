const UserSchema = require('../model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "todouser"

const Register = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        // const picture = req.file.filename;
        const salt = await bcrypt.genSalt(10)
        console.log()
        const secpass = await bcrypt.hash(password, salt)

        const data = await new UserSchema({ userName, email, password: secpass})
        const savedData = await data.save()
        console.log("registration successful")
        res.send({ "registered successfully": true, savedData })
    }
    catch (error) {
        console.error("some error occured!!!" + error);
        res.status(500).json("some internal error!!!")
    }
}
const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await UserSchema.findOne({ email })
        console.log(user, "user")
        if (!user) {
            return res.json({ error: "Invalid credential email" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            const success = false
            return res.json({ success, error: "Invalid credential password" })
        }
        const data = user.id;
        const authtoken = jwt.sign(data, JWT_SECRET)
        const success = true
        res.json({ success, authtoken, user })
    }
    catch (error) {
        console.error(error.message);
        res.send("internal error occured")
    }
}
const View = async (req, res) => {
    try {
        let data = await UserSchema.find()
        console.log(data);
        res.json(data)
    }
    catch (error) {
        console.error("some error occured!!!" + error);
        res.status(500).json("some internal error")
    }
}
const SingleView = async (req, res) => {
    try {
        let data = await UserSchema.findById(req.params.id)
        if (!data) {
            res.status(404).send("Not Found")
        }
        res.json(data)
    }
    catch (error) {
        console.error("some error occured" + error);
        res.status(500).json("Some internal error")
    }
}
module.exports = { Register, Login, View, SingleView }