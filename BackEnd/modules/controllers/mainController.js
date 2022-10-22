
const UserRegisterSchema = require("../../schemas/UserRegisterSchema")
const PostSchema = require("../../schemas/PostSchema")
const sendRes = require("../modules/universalRes")
const userPost = [];
const {uid} = require("uid")
module.exports = {
    userRegistration: async (req,res) => {

        const {email, password: password, username} = req.body

        new UserRegisterSchema({
            email,
            password,
            secret: uid(),
            username,
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    },
    logInUser: async(req,res) => {
        const {email, password} = req.body;
        const userExists = await  UserRegisterSchema.findOne({email, password})
        if(userExists) return sendRes(res, false, 'all good', {secret: userExists.secret} )
        sendRes(res, true, 'bad credentials', null)
    },
    getUserData: async (req, res) => {
        const {secret} = req.params
        const user = await UserRegisterSchema.findOne({secret})
        return sendRes(res, false, "all good", {email: user.email,
                                                username: user.username
                                                               })
    },
    updatePhoto: async (req, res) => {
        const {photo, secret} = req.body
        const newPhoto = await UserRegisterSchema.findOneAndUpdate(
            {secret: secret},
            {$set: {photo: photo}},
            {new : true}
        )
        res.send({newPhoto})
    },
    getUserPhoto: async (req, res) => {
        const {secret} = req.params

        const photo = await UserRegisterSchema.findOne({secret})
        return sendRes(res, false, 'all Good', {photo: photo.photo})
    },
    createPost: async (req, res) => {


        const newPost = new PostSchema(req.body)
        await newPost.save()
        userPost.push(newPost)

        res.send({userPost})
    },
    getPostData: async (req, res) => {
        const {secret} = req.params
        const post = await PostSchema.find({secret})
        return sendRes(res, false, 'all Good', {post})
    },
      deletePost: async (req, res) => {
        const {id} = req.params

        await PostSchema.findOneAndDelete({_id: id})

        res.send({success: true})
    },


}