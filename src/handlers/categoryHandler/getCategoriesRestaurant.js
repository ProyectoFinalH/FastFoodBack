const { getCategoriesRestaurant } = require("../../controllers/categoryController/getCategoriesRestaurant");


const getCategoriesRestaurantHandler=async(req,res)=>{

    const{id}=req.params;

    try {
        const categories=await getCategoriesRestaurant(id);
        categories.length
        ?res.status(200).json(categories)
        :res.status(400).json("No hay categorias registradas");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getCategoriesRestaurantHandler
}