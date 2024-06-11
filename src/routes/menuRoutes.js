const {Router}=require("express");
const { getMenusHandler } = require("../handlers/menuHandler/getMenus");
const { createMenuHandler } = require("../handlers/menuHandler/createMenu");
const { getDetailMenuHandler } = require("../handlers/menuHandler/getDetailMenu");
const { putMenuHandler } = require("../handlers/menuHandler/putMenu");
const { deleteMenuHandler } = require("../handlers/menuHandler/deleteMenu");
const { restoreMenuHandler } = require("../handlers/menuHandler/restoreMenu");

const menuRouter=Router();


menuRouter.get("/",getMenusHandler);
menuRouter.get("/:id",getDetailMenuHandler);
menuRouter.put("/:id",putMenuHandler);
menuRouter.post("/create",createMenuHandler);
menuRouter.put("/delete/:id",deleteMenuHandler);
menuRouter.put("/restore/:id",restoreMenuHandler);


module.exports=menuRouter;