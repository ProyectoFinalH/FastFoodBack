const { restoreMenu } = require("../../controllers/menuController/restoreMenu");

const restoreMenuHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await restoreMenu({id});
        response===false
        ?res.status(400).json("No se encontro este Menu o no fue posible restaurarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    restoreMenuHandler
}