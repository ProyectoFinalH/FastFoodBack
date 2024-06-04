const { createUser } = require("../../controllers/userController/createUser");

const createUserHandler=async(req,res)=>{

    const{username,email,password}=req.body;

    try {
        const response=await createUser({username,email,password});
        response===false
        ?res.status(400).json("Ya existe un usuario con este correo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createUserHandler
}