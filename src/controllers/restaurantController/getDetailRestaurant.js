const db=require('../../db/knex');

const getDetailRestaurant=async(id)=>{

    const infoDB=await db('restaurants')
    .where({id:id})
    .andWhere({active:true})
    .select('id','name','email','address','phone','description','image_url','active','role_id')
    .first();
    return infoDB;

};

module.exports={
    getDetailRestaurant
}