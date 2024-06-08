const db=require('../../db/knex');

const putOrderItems=async({id,order_id,menuitem_id,quantity})=>{

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
    
    const affectedRows = await db('orderitems').where({id:id}).update(newOrderItem);
    
    if(affectedRows>0){
        const record = await db('orderitems').where({id:id}).first();
        return record;
    }else{
        return false;
    }
    
};

module.exports={
    putOrderItems
}