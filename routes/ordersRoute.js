import express from 'express'

export const ordersRoute = express.Router()

ordersRoute.get('/orders', (req, res)=>{res.send("Hi from Orders")})
// ordersRoute.post()
// ordersRoute.put()
// ordersRoute.delete()