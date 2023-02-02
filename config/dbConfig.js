import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
mongoose.set('strictQuery', true)

export const connectToDb = async () =>{
    try{
        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.popsa.mongodb.net/?retryWrites=true&w=majority`)
    }catch(err){
        console.log("Connection fail")
    }
}