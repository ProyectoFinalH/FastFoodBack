const { Router } = require("express");
const { getItemsMenuHandler } = require("../handlers/itemsMenuHandler/getItemsMenu");
const { createItemMenuHandler } = require("../handlers/itemsMenuHandler/createItemMenu");
const { getItemDetailMenuHandler } = require("../handlers/itemsMenuHandler/getItemDetailMenu");
const { searchItemsMenuHandler } = require("../handlers/itemsMenuHandler/searchItemMenu");
const { ensureAuthenticated } = require("../utils/ensureAuth");
const parser = require('../config/multer');
const { putItemMenuHandler } = require("../handlers/itemsMenuHandler/putItemMenuHandler");

const itemsMenuRouter = Router();


itemsMenuRouter.get("/search",searchItemsMenuHandler);
//itemsMenuRouter.get("/",ensureAuthenticated,getItemsMenuHandler);
itemsMenuRouter.get("/",getItemsMenuHandler);
itemsMenuRouter.get("/:id",getItemDetailMenuHandler);
itemsMenuRouter.put("/:id",putItemMenuHandler);
itemsMenuRouter.post("/create", parser.single('image'), createItemMenuHandler);


// itemsMenuRouter.delete("/:id",deleteItemMenuHandler);


module.exports = itemsMenuRouter;
