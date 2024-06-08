const {Router}=require("express");
const { getOrderItemsHandler } = require("../handlers/orderItemsHandler/getOrderItems");
const { createOrderItemsHandler } = require("../handlers/orderItemsHandler/createOrderItems");
const { getDetailOrderItemsHandler } = require("../handlers/orderItemsHandler/getDetailOrderItems");
const { getOrderItemsByOrderHandler } = require("../handlers/orderItemsHandler/getOrderItemsByOrder");

const orderItemsRouter=Router();


orderItemsRouter.get("/",getOrderItemsHandler);
orderItemsRouter.get("/:id",getDetailOrderItemsHandler);
orderItemsRouter.get("/byorder/:id",getOrderItemsByOrderHandler);
// orderItemsRouter.put("/:id",putOrderItemsHandler);
orderItemsRouter.post("/create",createOrderItemsHandler);
// orderItemsRouter.delete("/:id",deleteOrderItemsHandler);


module.exports=orderItemsRouter;