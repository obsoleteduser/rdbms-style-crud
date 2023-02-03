import addressModel from "../models/adressSchema.js";


class AddressController{
    addAddress = async (req, res)=>{
        const { streetName, city, region, postalCode } = req.body
        console.log(req.body)
       const doc = await addressModel.create({
            streetName,
            city,
            region,
            postalCode
        })
        res.json(doc)
    }
}


export default new AddressController()