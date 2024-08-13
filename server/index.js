import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { Mongoose } from 'mongoose'
import User from './models/Usere.js'
import Transactions from './models/Transactions.js'

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const port = process.env.PORT || 5002
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//APIS

app.get("/v1/health", (req, res) => {
    res.send("Server is running")
})

app.post("/v1/signin", async(req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({
        email: email,
        password: password
    })
    if (user) {
        res.status(200).json({
            message: "Login Successful",
            user: user,
            success: true
        })
    }
    else {
        res.status(404).json({
            message: "Invalid Credentials",
            success: false,
            data: null
        })
    }
})

app.post("/v1/signup", async (req, res) => {
    const { name, email, password, gender } = req.body
    const user = new User({
        name,
        email,
        password,
        gender
    })
    try {
        const saveduser = await user.save();
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: saveduser
        })
    }
    catch (e) {
        res.json({
            success: false,
            message: "Try with different email Id",
            message: e.message,
            data: null
        })
    }

})



const connect = async () => {
    const conn = mongoose.connect(process.env.MONGO_URL)
    if (conn) {
        console.log("Connected to MongoDB")
    }
}
connect();