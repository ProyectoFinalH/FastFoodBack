const { loginUser } = require("../../controllers/userController/loginUser");

const loginUserHandler=async(req,res)=>{

    const {email,password}=req.body;
    try {
        const response=await loginUser({email,password});
        response===true
        ?res.status(200).json(response)
        :res.status(400).json("Usuario o password incorrecto");
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

module.exports={loginUserHandler}