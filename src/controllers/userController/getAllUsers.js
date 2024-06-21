const db=require('../../db/knex');

const getAllUsers=async()=>{

    const infoDB=await db('users').select('*').orderBy('id','asc');;
    return infoDB;

};

module.exports={
    getAllUsers
}