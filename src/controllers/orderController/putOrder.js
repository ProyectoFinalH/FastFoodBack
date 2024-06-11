const db=require('../../db/knex');

const putOrder=async({id,user_id,restaurant_id,total_price,items})=>{

    const newOrder={
        user_id:user_id,
        restaurant_id:restaurant_id,
        total_price:total_price,
        items:items
    }
    
    const affectedRows = await db('orders').where({id:id}).update(newOrder);
    
    if(affectedRows>0){
        const record = await db('orders').where({id:id}).first();
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    putOrder
}