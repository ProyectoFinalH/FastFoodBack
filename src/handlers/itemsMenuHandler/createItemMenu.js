const { createItemMenu } = require("../../controllers/itemsMenuController/createItemMenu");

const createItemMenuHandler=async(req,res)=>{

    const{menu_id,category_id,name,description,price,image_url}=req.body;

    try {
        const response=await createItemMenu({menu_id,category_id,name,description,price,image_url});
        response===false
        ?res.status(400).json("Ya existe un item con ese nombre")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createItemMenuHandler
}