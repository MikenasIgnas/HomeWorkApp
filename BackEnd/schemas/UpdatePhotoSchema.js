const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserPhotoSchema = new Schema({
    photo: {
        type:String,
        required: true
    },
    secret: {
        type: String,
        required: true
    }

})

const exportUser = mongoose.model("UserPhotos", UserPhotoSchema)

module.exports = exportUser