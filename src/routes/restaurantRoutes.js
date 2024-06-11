const {Router}=require("express");
const { getRestaurantsHandler } = require("../handlers/restaurantHandler/getRestaurants");
const { createRestaurantHandler } = require("../handlers/restaurantHandler/createRestaurant");
const { getDetailRestaurantHandler } = require("../handlers/restaurantHandler/getDetailRestaurant");
const { loginRestaurantHandler } = require("../handlers/restaurantHandler/loginRestaurant");
const { putRestaurantHandler } = require("../handlers/restaurantHandler/putRestaurant");
const { deleteRestaurantHandler } = require("../handlers/restaurantHandler/deleteRestaurant");
const { restoreRestaurantHandler } = require("../handlers/restaurantHandler/restoreRestaurant");

const restaurantRouter=Router();


//restaurantRouter.get("/loginGoogle",passport.authenticate('google',{scope:['profile','email']}));
restaurantRouter.get("/",getRestaurantsHandler);
restaurantRouter.get("/:id",getDetailRestaurantHandler);
restaurantRouter.put("/:id",putRestaurantHandler);
restaurantRouter.post("/create",createRestaurantHandler);
restaurantRouter.post("/login",loginRestaurantHandler);
restaurantRouter.put("/delete/:id",deleteRestaurantHandler);
restaurantRouter.put("/restore/:id",restoreRestaurantHandler);



module.exports=restaurantRouter;