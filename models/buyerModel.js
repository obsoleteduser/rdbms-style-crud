import { Schema, model } from "mongoose";


const buyerSchema = new Schema({
    buyerName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    buyerAddress: {
        type: Schema.Types.ObjectId,
        ref: 'address'
    }
})


const buyerModel = model('buyer', buyerSchema)

export default buyerModel