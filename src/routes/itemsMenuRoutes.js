const { Router } = require("express");
const { getItemsMenuHandler } = require("../handlers/itemsMenuHandler/getItemsMenu");
const { createItemMenuHandler } = require("../handlers/itemsMenuHandler/createItemMenu");
const { getItemDetailMenuHandler } = require("../handlers/itemsMenuHandler/getItemDetailMenu");
const { searchItemsMenuHandler } = require("../handlers/itemsMenuHandler/searchItemMenu");
const { ensureAuthenticated, ensureRestaurant, ensureAdmin } = require("../middleware/ensureAuth");
const parser = require('../config/multer');
const { putItemMenuHandler } = require("../handlers/itemsMenuHandler/putItemMenuHandler");
const { deleteItemMenuHandler } = require("../handlers/itemsMenuHandler/deleteItemMenu");
const { restoreItemMenuHandler } = require("../handlers/itemsMenuHandler/restoreItemMenu");
const { getAllItemsMenuHandler } = require("../handlers/itemsMenuHandler/getAllItemsMenu");
const { getItemsMenuRestaurantHandler } = require("../handlers/itemsMenuHandler/getItemsMenuRestaurant");
const { getItemsMenuHomeHandler } = require("../handlers/itemsMenuHandler/getItemsMenuHome");


const itemsMenuRouter = Router();


itemsMenuRouter.get("/search",searchItemsMenuHandler);
//itemsMenuRouter.get("/restaurant/:id",ensureRestaurant,getItemsMenuRestaurantHandler);//**ruta debe ir asi: /?token=${token} */
itemsMenuRouter.get("/restaurant/:id",ensureRestaurant,getItemsMenuRestaurantHandler)
itemsMenuRouter.get("/home/:id",getItemsMenuHomeHandler)
itemsMenuRouter.get("/",getItemsMenuHandler);
itemsMenuRouter.get("/all",ensureAdmin,getAllItemsMenuHandler);
//itemsMenuRouter.get("/all",getAllItemsMenuHandler);
itemsMenuRouter.get("/:id",getItemDetailMenuHandler);
itemsMenuRouter.put("/:id",parser.single('image_url'),ensureRestaurant,putItemMenuHandler);
itemsMenuRouter.post("/create", parser.single('image_url'),ensureRestaurant, createItemMenuHandler);
itemsMenuRouter.put("/delete/:id",ensureRestaurant,deleteItemMenuHandler);
itemsMenuRouter.put("/restore/:id",ensureRestaurant,restoreItemMenuHandler);





module.exports = itemsMenuRouter;
