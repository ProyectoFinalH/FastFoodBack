
const { findOrUpdate } = require("../../utils/findOrUpdate");
//const { findOrCreate } = require("../../utils/findOrCreate");
const { getDetailUser } = require("./getDetailUser");

const putUser=async({id,username,email,password})=>{

    const User={
        username:username,
        email:email,
        password:password
    }

    //PARA VALIDAR QUE EL CORREO INGRESADO NO EXISTE EN LA BD-->CREAR UNA FUNCION QUE BUSQUE ELEMENTOS DUPLICADOS
    // const {record,created}=await findOrCreate('users',{email:email},User)
    // if(!created){
    //     return false;
    // }
    
    
    const infoDB=await findOrUpdate('users',{id:id},User);
   
    if(infoDB==true){
        
        const userUpdate=await getDetailUser(id);
        
        return userUpdate;
    }else{
        return false
    }
    
};

module.exports={
    putUser
}