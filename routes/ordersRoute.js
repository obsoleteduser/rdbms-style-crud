import express from 'express'
import ordersController from '../controller/ordersController'

export const ordersRoute = express.Router()

ordersRoute.post('/orders', ordersController.addProduct)