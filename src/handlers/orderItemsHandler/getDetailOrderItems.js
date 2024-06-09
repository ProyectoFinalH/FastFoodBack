const { getDetailOrderItems } = require("../../controllers/orderItemsController/getDetailOrderItems");

const getDetailOrderItemsHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getDetailOrderItems(id);
        response
        ?res.status(200).json(response)
        :res.status(400).json("Este item de orden indicada no existe");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getDetailOrderItemsHandler
}