const { getCategories } = require("../../controllers/categoryController/getCategories");

const getCategoriesHandler=async(req,res)=>{

    try {
        const categories=await getCategories();
        categories.length
        ?res.status(200).json(categories)
        :res.status(404).json("No hay categorias registradas");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getCategoriesHandler
}