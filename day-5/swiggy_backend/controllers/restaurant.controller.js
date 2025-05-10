import RestaurantModel from "../models/Restaurant.model.js";



export async function createRestaurant(req,res){
    try{
        let {name,imgUrl,rating,cuisines,deliveryTime} = req.body;
        const newRestaurant = await RestaurantModel.create( {name,imgUrl,rating,cuisines,deliveryTime} )
        return res.status(201).json({"newRestaurant":newRestaurant})
    }
    catch(err){
        return res.status(500).json({"error while adding newRestaurant": err})
    }
}