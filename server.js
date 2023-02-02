import express from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './config/dbConfig.js'
import  ordersRoute  from './routes/ordersRoute.js'

dotenv.config()

const app = express()
app.use('/api', ordersRoute)

const start = async ()=>{
   await connectToDb()
    app.listen(process.env.PORT, ()=>{
        console.log(`Server started on ${process.env.PORT}`)
    })   
}

start()