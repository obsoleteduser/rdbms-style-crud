import { Schema, model } from "mongoose";


const addressSchema  = new Schema({

    streetName: String,
    city: String,
    region: String,
    postalCode: Number 


})

const addressModel = model('address', addressSchema)

export default addressModel