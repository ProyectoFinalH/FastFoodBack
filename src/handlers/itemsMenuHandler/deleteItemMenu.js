const { deleteItemMenu } = require("../../controllers/itemsMenuController/deleteItemMenu");

const deleteItemMenuHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await deleteItemMenu({id});
        response===false
        ?res.status(400).json("No se encontro este item en el menu o no fue posible borrarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    deleteItemMenuHandler
}