const mercadopago = require("../../config/mercadoPago");



const createPayment=async(preference)=>{

    mercadopago.preferences.create(preference)
		.then(function (response) {

            const id=reponse.body.id;

            if(id){
                return id;
            }else{
                return false;
            }


		}).catch(function (error) {
			return error;
		});

};

module.exports={
    createPayment
}