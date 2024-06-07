const {Router}=require("express");
const { getMenusHandler } = require("../handlers/menuHandler/getMenus");
const { createMenuHandler } = require("../handlers/menuHandler/createMenu");
const { getDetailMenuHandler } = require("../handlers/menuHandler/getDetailMenu");
const { putMenuHandler } = require("../handlers/menuHandler/putMenu");

const menuRouter=Router();


menuRouter.get("/",getMenusHandler);
menuRouter.get("/:id",getDetailMenuHandler);
menuRouter.put("/:id",putMenuHandler);
menuRouter.post("/create",createMenuHandler);
// menuRouter.delete("/:id",deleteMenuHandler);


module.exports=menuRouter;