const {Router}=require("express");
const userRouter = require("./userRoutes");
const menuRouter = require("./menuRoutes");
const itemsMenuRouter = require("./itemsMenuRoutes");
const categoryRouter = require("./categoryRoutes");
const commentRouter = require("./commentRoutes");


const mainRoutes=Router();

mainRoutes.use("/users",userRouter);
mainRoutes.use("/menus",menuRouter);
mainRoutes.use("/menuitems",itemsMenuRouter);
mainRoutes.use("/categories",categoryRouter);
mainRoutes.use("/comments",commentRouter);

module.exports=mainRoutes;