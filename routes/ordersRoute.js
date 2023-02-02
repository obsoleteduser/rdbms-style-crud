import express from 'express'
import ordersController from '../controller/ordersController'

export const ordersRoute = express.Router()

ordersRoute.get('/orders', (req, res)=>{res.send("Hi from Orders")})
ordersRoute.post('/orders', ordersController.addProduct)
// ordersRoute.put()
// ordersRoute.delete()