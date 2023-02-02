import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    productName: {type: String, required},
    categoryId: {type: String, required},
    productPrice: {type: String, required},
    productDescription: {type: String, required},
    buyerId: {type: String, required},
    orderDate: {type: Date, required}
})



export const order = model('order', ordersSchema)