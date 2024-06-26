const { createPayment } = require("../../controllers/mercadoPagoController/createPayment");

const createPaymentHandler = async (req, res) => {
    const { description, price_total, quantity_order } = req.body;

    const preference = {
       
        back_urls: {
            // "success": "http://localhost:3000/respuestacarrito",
            // "failure": "http://localhost:3000/respuestacarrito",
            "success": "https://fast-food-front-deploy.vercel.app/respuestacarrito",
            "failure": "https://fast-food-front-deploy.vercel.app/respuestacarrito",
        },
		items: [
            {
                title: description,
                unit_price: Number(price_total),
                quantity: Number(quantity_order),
                currency_id: "AR", // Cambiar a la moneda correcta
            }
        ]
       // auto_return: "approved",
    };

    try {
        const response = await createPayment(preference);
        console.log(JSON.stringify(response));
        
        response === false
            ? res.status(400).json("Los datos de la orden estÃ¡n incompletos")
            : res.status(200).json(response);
    } catch (error) {
        console.error("Error creating payment:", error);
        res.status(400).json({ error: error.message });
    }
};

module.exports={
    createPaymentHandler
}