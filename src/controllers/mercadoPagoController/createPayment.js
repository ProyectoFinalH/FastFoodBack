const mercadopago = require("../../config/mercadoPago");



const createPayment=async(preference)=>{

    const response=await mercadopago.preferences.create(preference);
    
    if(response){
        return response.body.id;
    }else{
        return false;
    }
		

};

module.exports={
    createPayment
}