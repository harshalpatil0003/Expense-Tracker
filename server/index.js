import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { Mongoose } from 'mongoose'
import User from './models/Usere.js'
import Transactions from './models/Transactions.js'
import {postsignin,postsignup} from './controllers/User.js'
import {posttransactions} from './controllers/Transactions.js'

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
app.post("/v1/signins", postsignin)

app.post("/v1/signups", postsignup)

app.post("/v1/transactions",posttransactions)



const connect = async () => {
    const conn = mongoose.connect(process.env.MONGO_URL)
    if (conn) {
        console.log("Connected to MongoDB")
    }
}
connect();