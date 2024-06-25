const { getAllCategories } = require("../../controllers/categoryController/getAllCategories");

const getAllCategoriesHandler=async(req,res)=>{

    try {
        const categories=await getAllCategories();
        categories.length
        ?res.status(200).json(categories)
        :res.status(404).json("No hay categorias registradas");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getAllCategoriesHandler
}