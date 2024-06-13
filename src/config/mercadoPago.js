const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
//const access_token= 'TEST-6794983537098760-060811-27083b62dbb126377eca94c0fa1049fa-138269840'
const access_token='TEST-2730197238948146-061317-771f4c354d319b8ae3b814cdc99f10c3-1858121060'

mercadopago.configure({
	access_token
});

module.exports = mercadopago;