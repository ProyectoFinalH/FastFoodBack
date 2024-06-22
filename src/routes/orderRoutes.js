const {Router}=require("express");
const { getOrdersHandler } = require("../handlers/orderHandler/getOrders");
const { createOrderHandler } = require("../handlers/orderHandler/createOrder");
const { getDetailOrderHandler } = require("../handlers/orderHandler/getDetailOrder");
const { putOrderHandler } = require("../handlers/orderHandler/putOrder");
const { deleteOrderHandler } = require("../handlers/orderHandler/deleteOrder");
const { restoreOrderHandler } = require("../handlers/orderHandler/restoreOrder");
const { getAllOrdersHandler } = require("../handlers/orderHandler/getAllOrders");
const { putStatusOrderHandler } = require("../handlers/orderHandler/putStatusOrder");
const { getOrdersRestaurantHandler } = require("../handlers/orderHandler/getOrdersRestaurant");
const { getOrdersUserHandler } = require("../handlers/orderHandler/getOrdersUser");
const { ensureRestaurant, ensureAdmin, ensureUser } = require("../middleware/ensureAuth");

const orderRouter=Router();


orderRouter.get("/",ensureAdmin,getOrdersHandler);
orderRouter.get("/all",ensureAdmin,getAllOrdersHandler);
orderRouter.get("/restaurant/:id",ensureRestaurant,getOrdersRestaurantHandler);
orderRouter.get("/user/:id",ensureUser,getOrdersUserHandler);
orderRouter.get("/:id",ensureUser,getDetailOrderHandler);
orderRouter.put("/:id",ensureRestaurant,putOrderHandler);
orderRouter.post("/create",ensureUser,createOrderHandler);
orderRouter.put("/delete/:id",ensureRestaurant,deleteOrderHandler);
orderRouter.put("/restore/:id",ensureRestaurant,restoreOrderHandler);
orderRouter.put("/status/:id",ensureUser,putStatusOrderHandler);


module.exports=orderRouter;