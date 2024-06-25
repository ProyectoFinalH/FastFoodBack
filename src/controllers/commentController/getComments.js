const db = require('../../db/knex');

const getComments = async ({ restaurant_id }) => {
  try {
    
    const comments=await db('comments')
    .leftJoin('users','comments.user_id','users.id')
    .select('comments.id','users.username as user_name','users.image_url as user_image_url','comments.comment','comments.rating','comments.active','comments.created_at')
    .where('comments.restaurant_id',restaurant_id)
    .orderBy('id','desc');
    return comments;



  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

module.exports = getComments;
