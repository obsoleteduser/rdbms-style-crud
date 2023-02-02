import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    productName: {type: String, required: true},
    categoryId: {type: String, required: true},
    productPrice: {type: String, required: true},
    productDescription: {type: String, required: true},
    buyerId: {type: String, required: true},
    orderDate: {type: Date, required: true}
})



export const order = model('order', ordersSchema)