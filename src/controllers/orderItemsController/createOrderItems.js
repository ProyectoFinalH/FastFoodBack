const db=require('../../db/knex');

const createOrderItems=async({order_id,menuitem_id,quantity})=>{

    const price_menuitem = await db('menuitems')
      .select('price')
      .where('id', menuitem_id)
      .first();
    
    

    const newOrderItem={
        order_id:order_id,
        menuitem_id:menuitem_id,
        quantity:quantity,
        price:(parseFloat(quantity)*parseFloat(price_menuitem.price)).toString()
        
    }
    
    
    const [id] = await db('orderitems').insert(newOrderItem).returning('id');
        record = await db('orderitems').where( id ).first();

    if(record){
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    createOrderItems
}