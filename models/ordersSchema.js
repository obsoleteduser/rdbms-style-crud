import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    productName: {type: String, required: true},
    categoryId: {type: String, required: true},
    productPrice: {type: String, required: true},
    productDescription: {type: String, required: true},
    buyerId: {
        type: Schema.Types.ObjectId,
        ref: 'buyer'
    },
    orderDate: {type: Date, default: new Date()}
})



export const order = model('order', ordersSchema)