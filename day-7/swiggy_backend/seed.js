import RestaurantModel from "./models/Restaurant.model.js"
// array
const dummyArr = [
    {
      "name": "Burger King",
      "rating": "4.4",
      "cuisines": "Burger, Americans",
      "deliveryTime":"20-25 mins",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/f67ccf11-0c7e-4ff6-aeb0-1b20304f6783_457403.jpg"
    },
    {
      "name": "Adil Hotel",
      "rating": "4.3",
      "cuisines": "North Indian, Biryani",
      "deliveryTime":"35-40 mins",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
    },
    {
      "name": "Pizza Hut",
      "rating": "4",
      "cuisines": "pizza",
      "deliveryTime":"50-55 mins",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg"
    }
    
]

// insertmany
export async function seedDB(){
    await RestaurantModel.insertMany(dummyArr);
    console.log("DB SEEDED");
}














