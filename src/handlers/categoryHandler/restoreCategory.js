const { restoreCategory } = require("../../controllers/categoryController/restoreCategory");

const restoreCategoryHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await restoreCategory({id});
        response===false
        ?res.status(404).json("No se encontro esta categoria o no fue posible restaurarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    restoreCategoryHandler
}