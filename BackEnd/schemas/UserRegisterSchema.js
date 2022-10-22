const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserRegisterSchema = new Schema({
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    secret: {
        type:String,
        required: true
    },
    username:{
        type: String,
        require:true
    },
    photo: {
        type: String,
        require: true
    }
})

const exportUser = mongoose.model("registerUser", UserRegisterSchema)

module.exports = exportUser