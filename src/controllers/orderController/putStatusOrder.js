const db=require('../../db/knex');

const putStatusOrder=async({id,statusorder_id})=>{

    const order={
        statusorder_id:statusorder_id
    }
    
    const affectedRows = await db('orders').where({id:id}).update(order);
    
    if(affectedRows>0){
        const record = await db('orders').where({id:id}).first();
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    putStatusOrder
}