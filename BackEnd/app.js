const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const mainRouter = require("./modules/routes/router")

mongoose.connect("mongodb+srv://admin:admin@cluster0.ygjtj4s.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('CONNECTED OK')
    }).catch(e => {
    console.log('CONNECTION ERROR')
})

app.use(cors())

app.use(express.json())

app.listen(4000)

app.use("/", mainRouter)

const bcrypt = require('bcrypt')

const createHash  = async () => {
    let myPassword = 'password1233';

    const hash = await bcrypt.hash(myPassword, 10);
    console.log(hash)
};
createHash()

const comparePassword = async () => {
    const myPassword = 'password1233';
    const hash = '$2b$10$N3Dr1JqIuc4sTWGoZ7.H0u/1oXt862H/7RDlEM5LMmOB8tW8GX/8e';
    const compare = await bcrypt.compare(myPassword, hash)
    console.log(compare)
}

comparePassword()