import { order } from "../models/ordersSchema.js";

class OrdersController {
  addProduct = async (req, res) => {
    try {
        console.log(req.body)
      const {
        productName,
        categoryId,
        productPrice,
        productDescription,
        buyerId,
        orderDate,
      } = req.body;
     const newOrder = await order.create({
        productName,
        categoryId,
        productPrice,
        productDescription,
        buyerId,
        orderDate,
      });
      res.json(newOrder)
    } catch (err) {
      res.json(err);
    }
  };
}

export default new OrdersController();
