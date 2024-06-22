const db=require('../../db/knex');

const getDetailUser=async(id)=>{

    const infoDB=await db('users')
    .where({id:id})
    .andWhere({active:true})
    .select('id','username','email','telefono','google_id','role_id','image_url','active')
    .first();
    return infoDB;

};

module.exports={
    getDetailUser
}