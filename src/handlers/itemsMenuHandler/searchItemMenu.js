const { SearchItemMenu } = require("../../controllers/itemsMenuController/searchItemMenu");

const searchItemsMenuHandler=async(req,res)=>{

    const {name}=req.query;

    try {
        const response=await SearchItemMenu(name);
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay items registrados con ese nombre");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    searchItemsMenuHandler
}