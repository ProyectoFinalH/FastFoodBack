const {Router}=require("express");
const userRouter = require("./userRoutes");
const menuRouter = require("./menuRoutes");
const itemsMenuRouter = require("./itemsMenuRoutes");

const mainRoutes=Router();

mainRoutes.use("/users",userRouter);
mainRoutes.use("/menus",menuRouter);
mainRoutes.use("/menuitems",itemsMenuRouter);

module.exports=mainRoutes;