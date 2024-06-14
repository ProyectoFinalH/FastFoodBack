const { createPayment } = require("../../controllers/mercadoPagoController/createPayment");

const createPaymentHandler=async(req,res)=>{

    const{description,price_total,quantity_order}=req.body;
	

    const preference = {
		items: [
			{
				title: description,
				unit_price: Number(price_total),
				quantity: parseInt(quantity_order),
			}
		],
		back_urls: {
			"success": "localhost:3000/",
			"failure": "localhost:3000/",
			"pending": ""
		},
		auto_return: "approved",
		
	};

    try {
        const response=await createPayment(preference);
        response===false
        ?res.status(400).json("Los datos de la orden estan incompletos")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createPaymentHandler
}