import { order } from "../models/ordersSchema"

class OrdersController{
    addProduct = async(req, res)=>{
        try{
           await order.create()
        }catch(err){
            res.send("Something went wrong!")
        }
    }
}

export default new OrdersController()