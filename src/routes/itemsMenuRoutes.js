const {Router}=require("express");
const { getItemsMenuHandler } = require("../handlers/itemsMenuHandler/getItemsMenu");
const { createItemMenuHandler } = require("../handlers/itemsMenuHandler/createItemMenu");

const itemsMenuRouter=Router();


itemsMenuRouter.get("/",getItemsMenuHandler);
//itemsMenuRouter.get("/:id",getItemDetailMenuHandler);
// itemsMenuRouter.put("/:id",putItemMenuHandler);
itemsMenuRouter.post("/create",createItemMenuHandler);
// itemsMenuRouter.delete("/:id",deleteItemMenuHandler);


module.exports=itemsMenuRouter;