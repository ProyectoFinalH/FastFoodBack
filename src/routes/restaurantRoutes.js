const {Router}=require("express");
const { getRestaurantsHandler } = require("../handlers/restaurantHandler/getRestaurants");
const { createRestaurantHandler } = require("../handlers/restaurantHandler/createRestaurant");
const { getDetailRestaurantHandler } = require("../handlers/restaurantHandler/getDetailRestaurant");
const { loginRestaurantHandler } = require("../handlers/restaurantHandler/loginRestaurant");
const { putRestaurantHandler } = require("../handlers/restaurantHandler/putRestaurant");
const { deleteRestaurantHandler } = require("../handlers/restaurantHandler/deleteRestaurant");
const { restoreRestaurantHandler } = require("../handlers/restaurantHandler/restoreRestaurant");
const parser = require("../config/multer");
const { getAllRestaurantsHandler } = require("../handlers/restaurantHandler/getAllRestaurants");
const { ensureAdmin, ensureRestaurant } = require("../middleware/ensureAuth");

const restaurantRouter=Router();


//restaurantRouter.get("/loginGoogle",passport.authenticate('google',{scope:['profile','email']}));
restaurantRouter.get("/",getRestaurantsHandler);
restaurantRouter.get("/all",ensureAdmin,getAllRestaurantsHandler);
restaurantRouter.get("/:id",getDetailRestaurantHandler);
restaurantRouter.put("/:id",parser.single('image_url'),ensureRestaurant,putRestaurantHandler);
restaurantRouter.post("/create",parser.single('image_url'),createRestaurantHandler);
restaurantRouter.post("/login",loginRestaurantHandler);
restaurantRouter.put("/delete/:id",ensureAdmin,deleteRestaurantHandler);
restaurantRouter.put("/restore/:id",ensureAdmin,restoreRestaurantHandler);



module.exports=restaurantRouter;