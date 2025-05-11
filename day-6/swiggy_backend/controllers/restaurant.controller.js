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


export async function fetchRestaurant(req,res) {
    try{
        let data = await RestaurantModel.find();
        if(!data){
            return res.status(404).json({"message":"Restaurant not found"})
        }
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(500).json({"error while fetching Restaurants": err})
    }
}

export async function updateRestaurant(req,res) {
    try{
        const _id = req.params.id;
        
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(_id, req.body , {new:true})
        if(!updatedRestaurant){
            return res.status(404).json({"message":"Restaurant not found"})
        }
        res.status(200).json(updatedRestaurant)
    }
    catch(err){
        return res.status(500).json({"message": err.message})
    }
}

export async function deleteRestaurant(req,res) {
    try{
        const _id = req.params.id;
        
        const deletedRestaurant = await RestaurantModel.findByIdAndDelete(_id)
        if(!deletedRestaurant){
            return res.status(404).json({"message":"Restaurant not found"})
        }
        res.status(200).json(deletedRestaurant)
    }
    catch(err){
        return res.status(500).json({"message": err.message})
    }
}
