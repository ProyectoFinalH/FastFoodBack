const db=require('../../db/knex');

const getUsers=async()=>{

    const infoDB=await db('users').where('active',true).orderBy('id','asc');;
    return infoDB;

};

module.exports={
    getUsers
}