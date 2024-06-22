const {Router}=require("express");
const { createPaymentHandler } = require("../handlers/mercadoPagoHandler/createPayment");
const { ensureUser } = require("../middleware/ensureAuth");

const mercadoPagoRouter=Router();



mercadoPagoRouter.post("/create",ensureUser,createPaymentHandler);



module.exports=mercadoPagoRouter;