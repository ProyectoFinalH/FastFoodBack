const { getDetailCategory } = require("../../controllers/categoryController/getDetailCategory");

const getDetailCategoryHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getDetailCategory(id);
        response
        ?res.status(200).json(response)
        :res.status(400).json("Esta categoria no existe");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getDetailCategoryHandler
}