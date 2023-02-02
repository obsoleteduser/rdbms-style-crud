import express from 'express'
import ordersController from '../controller/ordersController.js'

const ordersRoute = express.Router()

ordersRoute.post('/orders', ordersController.addProduct)

export default ordersRoute