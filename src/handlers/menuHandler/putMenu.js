const { putMenu } = require("../../controllers/menuController/putMenu");

const putMenuHandler=async(req,res)=>{

    const {id}=req.params;
    const {name}=req.body;

    try {
        
        const response=await putMenu({id,name});
        response===false
        ?res.status(400).json("Hubo un error al modificar el menu")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putMenuHandler
}