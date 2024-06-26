const { createUser } = require("../../controllers/userController/createUser");

const createUserHandler=async(req,res)=>{

    const{username,email,password,telefono}=req.body;

    let imageCloudinary;
    if (req.file) {
        imageCloudinary = req.file.path;
    }

    try {
        const response=await createUser({username,email,password,telefono,image_url:imageCloudinary });
        response===false
        ?res.status(409).json("Ya existe un usuario con este correo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createUserHandler
}