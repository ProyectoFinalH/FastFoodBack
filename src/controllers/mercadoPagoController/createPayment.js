const mercadopago = require("../../config/mercadoPago");



const createPayment=async(preference)=>{
    
    try {
        const response = await mercadopago.preferences.create(preference);
        return response.body.init_point;
    } catch (error) {
        console.error("Error creating payment preference:", error);
        return false;
    }

		

};

module.exports={
    createPayment
}