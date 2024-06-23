const {Router}=require("express");
const { getMenusHandler } = require("../handlers/menuHandler/getMenus");
const { createMenuHandler } = require("../handlers/menuHandler/createMenu");
const { getDetailMenuHandler } = require("../handlers/menuHandler/getDetailMenu");
const { putMenuHandler } = require("../handlers/menuHandler/putMenu");
const { deleteMenuHandler } = require("../handlers/menuHandler/deleteMenu");
const { restoreMenuHandler } = require("../handlers/menuHandler/restoreMenu");
const { getAllMenusHandler } = require("../handlers/menuHandler/getAllMenus");
const { getMenusRestaurantHandler } = require("../handlers/menuHandler/getMenusRestaurant");
const { getMenusHomeHandler } = require("../handlers/menuHandler/getMenusHome");
const { ensureRestaurant, ensureAdmin } = require("../middleware/ensureAuth");

const menuRouter=Router();


menuRouter.get("/",getMenusHandler);
menuRouter.get("/home/:id",getMenusHomeHandler);
menuRouter.get("/restaurant/:id",ensureRestaurant,getMenusRestaurantHandler);
menuRouter.get("/all",ensureAdmin,getAllMenusHandler);
menuRouter.get("/:id",getDetailMenuHandler);
menuRouter.put("/:id",ensureRestaurant,putMenuHandler);
menuRouter.post("/create",ensureRestaurant,createMenuHandler);
menuRouter.put("/delete/:id",ensureRestaurant,deleteMenuHandler);
menuRouter.put("/restore/:id",ensureRestaurant,restoreMenuHandler);


module.exports=menuRouter;