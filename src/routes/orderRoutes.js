const {Router}=require("express");
const { getOrdersHandler } = require("../handlers/orderHandler/getOrders");
const { createOrderHandler } = require("../handlers/orderHandler/createOrder");
const { getDetailOrderHandler } = require("../handlers/orderHandler/getDetailOrder");

const orderRouter=Router();


orderRouter.get("/",getOrdersHandler);
orderRouter.get("/:id",getDetailOrderHandler);
// orderRouter.put("/:id",putOrderHandler);
orderRouter.post("/create",createOrderHandler);
// orderRouter.delete("/:id",deleteOrderHandler);


module.exports=orderRouter;