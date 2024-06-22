const db=require('../../db/knex');

const getDetailRestaurant=async(id)=>{

    const infoDB=await db('restaurants')
    .where({id:id})
    .andWhere({active:true})
    .first();
    return infoDB;

};

module.exports={
    getDetailRestaurant
}