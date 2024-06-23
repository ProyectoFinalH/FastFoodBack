const { getAllItemsMenu } = require("../../controllers/itemsMenuController/getAllItemsMenu");


const getAllItemsMenuHandler=async(req,res)=>{

    try {
        const itemsMenu=await getAllItemsMenu();
        itemsMenu.length
        ?res.status(200).json(itemsMenu)
        :res.status(400).json("No hay items registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getAllItemsMenuHandler
}