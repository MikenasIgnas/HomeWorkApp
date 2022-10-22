const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
    photo: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    secret:{
        type: String,
        require: true
    }

})

const exportUser = mongoose.model("userPost", PostSchema)

module.exports = exportUser