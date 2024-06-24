const {Router}=require("express");
const userRouter = require("./userRoutes");
const menuRouter = require("./menuRoutes");
const itemsMenuRouter = require("./itemsMenuRoutes");
const categoryRouter = require("./categoryRoutes");
const commentRouter = require("./commentRoutes");
const restaurantRouter = require("./restaurantRoutes");
const orderRouter = require("./orderRoutes");
const mercadoPagoRouter = require("./mercadoPagoRoutes");

const jwt=require('jsonwebtoken')
require("dotenv").config()
const passport=require('passport');



const mainRoutes=Router();


mainRoutes.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    const token = jwt.sign({ id: req.user.id, email: req.user.email, role_id: req.user.role_id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    //res.redirect(`/`);
    res.status(200).json("true");
  });

mainRoutes.use("/users",userRouter);
mainRoutes.use("/menus",menuRouter);
mainRoutes.use("/menuitems",itemsMenuRouter);
mainRoutes.use("/categories",categoryRouter);
mainRoutes.use("/comments",commentRouter);
mainRoutes.use("/restaurants",restaurantRouter);
mainRoutes.use("/orders",orderRouter);
mainRoutes.use("/mercadopago",mercadoPagoRouter);




module.exports=mainRoutes;