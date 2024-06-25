const { getOrdersUser } = require("../../controllers/orderController/getOrdersUser");

const getOrdersUserHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getOrdersUser(id);
        response.length
        ?res.status(200).json(response)
        :res.status(404).json("No hay ordenes registradas de este usuario");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getOrdersUserHandler
}