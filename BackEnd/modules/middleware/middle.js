const emailValidator = require("email-validator");
const passwordValidator = require('password-validator');
const sendRes = require("../modules/universalRes")
const UserRegisterSchema = require("../../schemas/UserRegisterSchema")
module.exports  = {
    emailValid: (req, res, next) => {
        const {email} = req.body
        if(!emailValidator.validate(email)) return sendRes(res, true, "bad email", null)
        next()
    },
    passwordsValid: async (req, res, next) => {
        const {password, repeatPassword} = req.body
        if(password !== repeatPassword) return sendRes(res, true, "passwords do not match", null)
        if(password.length < 5 || repeatPassword.length > 20) return sendRes(res, true, "bad password length", null)
        next()
    },
    userValid: async (req, res, next) => {
        const {email} = req.body

        const userExists = await UserRegisterSchema.findOne({email})

        if(userExists) {
            return sendRes(res, true, "user already exists", null)
        }

        next()
    },
    secretValid: async (req, res, next) => {
        const {secret} = req.params

        const userExists = await UserRegisterSchema.findOne({secret})

        if(!userExists) return  sendRes(res, true, "bad user secret", null)

        next()
    },
}
