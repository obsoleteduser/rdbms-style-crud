import { order } from "../models/ordersSchema";

class OrdersController {
  addProduct = async (req, res) => {
    try {
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
      es.json(newOrder)
    } catch (err) {
      res.json(err);
    }
  };
}

export default new OrdersController();
