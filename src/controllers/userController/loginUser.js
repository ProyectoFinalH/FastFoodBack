const db = require("../../db/knex")
const jwt=require('jsonwebtoken')

// Función para generar un token JWT
function generateToken(user) {
    return jwt.sign({ id: user.id, name:user.username, email: user.email, role_id:user.role_id}, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  }

const loginUser=async({email,password})=>{

    const infoDB=await db('users')
    .where({email:email})
    .andWhere({active:true})
    .first();
    if(infoDB){
        if(infoDB.password===password){
            const token=generateToken(infoDB);
            // return token;
            return {
                token:token,
                state:true,
                id:infoDB.id,
                email:infoDB.email,
                name:infoDB.username
            };
        }else{
            return false;
        }
    }
    else{
        return false;
    }
    


}

module.exports={loginUser}