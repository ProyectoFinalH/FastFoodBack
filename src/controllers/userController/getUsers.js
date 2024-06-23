const db=require('../../db/knex');

const getUsers=async()=>{

    const infoDB=await db('users')
    .where('active',true)
    .select('id','username','email','telefono','google_id','role_id','image_url','active')
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getUsers
}