module.exports = (req, res,next) => {
    const {emailValue, passwordValue} = req.body
        console.log(emailValue,passwordValue)


    next()
}