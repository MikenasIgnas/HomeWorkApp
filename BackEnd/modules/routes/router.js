const express = require("express")
const router = express.Router()
const {emailValid, passwordsValid, userValid, secretValid} = require("../middleware/middle")
const {  
    userRegistration, 
    logInUser,
    getUserData, 
    updatePhoto, 
    getUserPhoto, 
    createPost,
    getPostData,
    deletePost,
} = require("../controllers/mainController")

router.post("/userRegistration", emailValid, passwordsValid, userValid ,userRegistration)
router.post("/logInUser", logInUser)
router.post("/updatePhoto", updatePhoto)
router.get("/getUserData/:secret", secretValid, getUserData)
router.get("/getUserPhoto/:secret", secretValid, getUserPhoto)

router.post("/createPost", createPost)
router.get("/getPostData/:secret", secretValid, getPostData)

router.get("/deletePost/:id", deletePost)
module.exports = router

