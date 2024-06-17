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

const orderRouter=Router();


orderRouter.get("/",getOrdersHandler);
orderRouter.get("/restaurant/:id",getOrdersRestaurantHandler);
orderRouter.get("/user/:id",getOrdersUserHandler);
orderRouter.get("/all",getAllOrdersHandler);
orderRouter.get("/:id",getDetailOrderHandler);
orderRouter.put("/:id",putOrderHandler);
orderRouter.post("/create",createOrderHandler);
orderRouter.put("/delete/:id",deleteOrderHandler);
orderRouter.put("/restore/:id",restoreOrderHandler);
orderRouter.put("/status/:id",putStatusOrderHandler);


module.exports=orderRouter;