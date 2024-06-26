const { createCategory } = require("../../controllers/categoryController/createCategory.js");

const createCategoryHandler=async(req,res)=>{

    const{restaurant_id,name}=req.body;

    try {
        const response=await createCategory({restaurant_id,name});
        response===false
        ?res.status(409).json("Ya existe una categoria con ese nombre")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createCategoryHandler
}