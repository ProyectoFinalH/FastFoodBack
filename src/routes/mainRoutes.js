const {Router}=require("express");
const userRoutes = require("./userRoutes");
const mainRoutes=Router();

mainRoutes.use("/users",userRoutes);

module.exports=mainRoutes;