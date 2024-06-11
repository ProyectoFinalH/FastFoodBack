const {Router}=require("express");
const { getOrdersHandler } = require("../handlers/orderHandler/getOrders");
const { createOrderHandler } = require("../handlers/orderHandler/createOrder");
const { getDetailOrderHandler } = require("../handlers/orderHandler/getDetailOrder");
const { putOrderHandler } = require("../handlers/orderHandler/putOrder");
const { deleteOrderHandler } = require("../handlers/orderHandler/deleteOrder");
const { restoreOrderHandler } = require("../handlers/orderHandler/restoreOrder");

const orderRouter=Router();


orderRouter.get("/",getOrdersHandler);
orderRouter.get("/:id",getDetailOrderHandler);
orderRouter.put("/:id",putOrderHandler);
orderRouter.post("/create",createOrderHandler);
orderRouter.put("/delete/:id",deleteOrderHandler);
orderRouter.put("/restore/:id",restoreOrderHandler);


module.exports=orderRouter;