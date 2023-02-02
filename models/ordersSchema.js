import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    productName: {},
    categoryId: {},
    productPrice: {},
    productDescription: {},
    buyerId: {},
    orderDate: {}
})



export const order = model('order', ordersSchema)