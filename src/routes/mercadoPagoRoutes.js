const {Router}=require("express");
const { createPaymentHandler } = require("../handlers/mercadoPagoHandler/createPayment");

const mercadoPagoRouter=Router();



mercadoPagoRouter.post("/create",createPaymentHandler);



module.exports=mercadoPagoRouter;