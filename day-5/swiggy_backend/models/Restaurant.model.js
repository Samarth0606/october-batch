import mongoose from 'mongoose';

//schema
const restaurantSchema = new mongoose.Schema({
    // name: {
    //     type:String,
    //     required: true
    // },
    name: String,
    imgUrl: String,
    rating: String,
    cuisines: String,
    deliveryTime: String
});

// model/collection -> JS class
const RestaurantModel = mongoose.model('Restaurants', restaurantSchema);

export default RestaurantModel;






