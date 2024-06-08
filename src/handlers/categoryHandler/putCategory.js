const { putCategory } = require("../../controllers/categoryController/putCategory");

const putCategoryHandler=async(req,res)=>{

    const {id}=req.params;
    const {name}=req.body;

    try {
        
        const response=await putCategory({id,name});
        response===false
        ?res.status(400).json("Ya existe una categoria con este nombre o hubo un error al actualizarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putCategoryHandler
}