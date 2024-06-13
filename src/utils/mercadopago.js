const express = require("express");
const session = require('express-session');
const passport = require('./config/googleAuth');
const morgan = require("morgan");
const mainRoutes = require("./routes/mainRoutes");
const itemsMenuRoutes = require("./routes/itemsMenuRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const path = require('path');
const  { MercadoPagoConfig, Payment } = require('mercadopago')

const app = express();

const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
 const access_token= 'TEST-6794983537098760-060811-27083b62dbb126377eca94c0fa1049fa-138269840'
mercadopago.configure({
	access_token
});

 
/*

const client = new MercadoPagoConfig({ accessToken: access_token, options: { timeout: 5000, idempotencyKey: 'abc' } });

// Middlewares

const payment = new Payment(client);*/


app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/googleAuth');

app.use(mainRoutes);
app.use('/api/menuitems', itemsMenuRoutes);
app.use('/api/users', userRoutes);

// Ruta para crear la preferencia de pago
app.use((req, res, next) => {
	res.setHeader(
	  'Content-Security-Policy',
	  "script-src 'self' 'https://www.mercadopago.com.ar';"
	);
	next();
  });
  


app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "localhost:3000/menu",
			"failure": "localhost:3000/menu",
			"pending": ""
		},
		auto_return: "approved",
		
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	
	console.log("Payment:"+ req.query.payment_id)
		console.log("Status:"+ req.query.status)
		console.log("MerchantOrder:"+ req.query.merchant_order_id)

	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});
