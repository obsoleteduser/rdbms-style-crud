import express from 'express'
import addressController from '../controller/addressController.js'

const addressRoute = express.Router()

addressRoute.post('/address', addressController.addAddress)


export default addressRoute