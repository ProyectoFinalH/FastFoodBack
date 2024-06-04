const { loginGoogle } = require("../../controllers/userController/loginGoogle");

const loginGoogleHandler=async(req,res)=>{

    
    try {
        const response= await loginGoogle()
        response===true
        ?res.status(200).json(response)
        :res.status(400).json("Error con login de Google");
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

module.exports={loginGoogleHandler}