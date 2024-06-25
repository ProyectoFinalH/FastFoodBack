const { deleteMenu } = require("../../controllers/menuController/deleteMenu");

const deleteMenuHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await deleteMenu({id});
        response===false
        ?res.status(404).json("No se encontro este menu o no fue posible borrarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    deleteMenuHandler
}