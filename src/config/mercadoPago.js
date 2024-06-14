const mercadopago = require("mercadopago");

const access_token=process.env.MERCADOPAGO_ACCESS_TOKEN

mercadopago.configure({
	access_token
});

module.exports = mercadopago;