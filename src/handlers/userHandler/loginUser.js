const { loginUser } = require("../../controllers/userController/loginUser");

const loginUserHandler=async(req,res)=>{

    const {email,password}=req.body;
    try {
        const response=await loginUser({email,password});
        response===false
        ?res.status(400).json("Usuario o password incorrecto")
        :res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

module.exports={loginUserHandler}