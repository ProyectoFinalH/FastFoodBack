const { Router } = require("express");
const { getItemsMenuHandler } = require("../handlers/itemsMenuHandler/getItemsMenu");
const { createItemMenuHandler } = require("../handlers/itemsMenuHandler/createItemMenu");
const { getItemDetailMenuHandler } = require("../handlers/itemsMenuHandler/getItemDetailMenu");
const { searchItemsMenuHandler } = require("../handlers/itemsMenuHandler/searchItemMenu");
const { ensureAuthenticated } = require("../utils/ensureAuth");
const parser = require('../config/multer');
const { putItemMenuHandler } = require("../handlers/itemsMenuHandler/putItemMenuHandler");
const { deleteItemMenuHandler } = require("../handlers/itemsMenuHandler/deleteItemMenu");
const { restoreItemMenuHandler } = require("../handlers/itemsMenuHandler/restoreItemMenu");


const itemsMenuRouter = Router();


itemsMenuRouter.get("/search",searchItemsMenuHandler);
//itemsMenuRouter.get("/",ensureAuthenticated,getItemsMenuHandler);
itemsMenuRouter.get("/",getItemsMenuHandler);
itemsMenuRouter.get("/:id",getItemDetailMenuHandler);
itemsMenuRouter.put("/:id",parser.single('image_url'),putItemMenuHandler);
itemsMenuRouter.post("/create", parser.single('image_url'), createItemMenuHandler);
itemsMenuRouter.put("/delete/:id",deleteItemMenuHandler);
itemsMenuRouter.put("/restore/:id",restoreItemMenuHandler);





module.exports = itemsMenuRouter;
