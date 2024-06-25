const { restoreItemMenu } = require("../../controllers/itemsMenuController/restoreItemMenu");

const restoreItemMenuHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await restoreItemMenu({id});
        response===false
        ?res.status(404).json("No se encontro este Item del Menu o no fue posible restaurarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    restoreItemMenuHandler
}