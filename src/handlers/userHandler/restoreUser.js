const { restoreUser } = require("../../controllers/userController/restoreUser");


const restoreUserHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await restoreUser({id});
        response===false
        ?res.status(404).json("No se encontro este usuario o no fue posible restaurarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    restoreUserHandler
}