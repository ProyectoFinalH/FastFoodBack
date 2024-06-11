const { putItemMenu } = require("../../controllers/itemsMenuController/putItemMenu");

const putItemMenuHandler=async(req,res)=>{

    const {id}=req.params;
    const {menu_id,category_id,name,description,price}=req.body;

    let imageCloudinary;
    if (req.file) {
        imageCloudinary = req.file.path;
    }

    try {
        
        const response=await putItemMenu({id,menu_id,category_id,name,description,price,image_url:imageCloudinary});
        response===false
        ?res.status(400).json("Ya existe un item del menu con este nombre o hubo un error al actualizarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putItemMenuHandler
}