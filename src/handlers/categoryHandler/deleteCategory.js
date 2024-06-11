const { deleteCategory } = require("../../controllers/categoryController/deleteCategory");

const deleteCategoryHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await deleteCategory({id});
        response===false
        ?res.status(400).json("No se encontro esta categoria o no fue posible borrarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    deleteCategoryHandler
}