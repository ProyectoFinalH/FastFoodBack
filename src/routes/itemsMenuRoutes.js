const { Router } = require("express");
const { getItemsMenuHandler } = require("../handlers/itemsMenuHandler/getItemsMenu");
const { createItemMenuHandler } = require("../handlers/itemsMenuHandler/createItemMenu");
const { getItemDetailMenuHandler } = require("../handlers/itemsMenuHandler/getItemDetailMenu");
const { searchItemsMenuHandler } = require("../handlers/itemsMenuHandler/searchItemMenu");
const parser = require('../config/multer');

const itemsMenuRouter = Router();

itemsMenuRouter.get("/search", searchItemsMenuHandler);
itemsMenuRouter.get("/", getItemsMenuHandler);
itemsMenuRouter.get("/:id", getItemDetailMenuHandler);
// itemsMenuRouter.put("/:id", putItemMenuHandler);
itemsMenuRouter.post("/create", parser.single('image'), createItemMenuHandler);
// itemsMenuRouter.delete("/:id", deleteItemMenuHandler);

module.exports = itemsMenuRouter;
