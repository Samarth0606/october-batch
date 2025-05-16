
import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


export function restRoutes(app){
    app.post('/api/restaurant' , verifyToken, createRestaurant);
    app.get('/api/restaurants' , fetchRestaurant);
    app.put('/api/restaurant/:id' , updateRestaurant);
    app.delete('/api/restaurant/:id' , deleteRestaurant);

}