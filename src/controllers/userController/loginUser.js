const db = require("../../db/knex")
const jwt=require('jsonwebtoken')

// Función para generar un token JWT
function generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email}, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  }

const loginUser=async({email,password})=>{

    const infoDB=await db('users').where({email:email}).first();
    if(infoDB){
        if(infoDB.password===password){
            // const token=generateToken(infoDB);
            // return token;
            return true;
        }else{
            return false;
        }
    }
    else{
        return false;
    }
    


}

module.exports={loginUser}