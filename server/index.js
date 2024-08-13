import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { Mongoose } from 'mongoose'

const app=express()

app.use(express.json())
app.use(cors())
dotenv.config()

const port=process.env.PORT || 5002
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

const connect=async()=>{
    const conn =mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log("Connected to MongoDB")
    }
}
connect();

app.get("/health", (req,res)=>{
    res.send("Server is running")
})
