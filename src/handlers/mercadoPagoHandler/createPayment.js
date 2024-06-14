const { createPayment } = require("../../controllers/mercadoPagoController/createPayment");

const createPaymentHandler=async(req,res)=>{

    const{description,price,quantity}=req.body;

    const preference = {
		items: [
			{
				title: description,
				unit_price: Number(price),
				quantity: Number(quantity),
			}
		],
		back_urls: {
			"success": "localhost:3000/menu",
			"failure": "localhost:3000/menu",
			"pending": ""
		},
		auto_return: "approved",
		
	};

    try {
        const response=await createPayment(preference);
        response===false
        ?res.status(400).json("Hubo un error al procesar el pago")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createPaymentHandler
}