const db = require('../../db/knex');

const createComment = async (req, res) => {
  const { user_id, restaurant_id, order_id, comment, rating } = req.body;

  try {
    // Verificar si la orden existe y pertenece al usuario y restaurante
    const order = await db('orders').where({ id: order_id, user_id, restaurant_id }).first();

    if (!order) {
      return res.status(400).json({ error: 'Invalid order or order does not belong to the user' });
    }

    // Insertar el nuevo comentario
    const newComment = await db('comments').insert({
      user_id,
      restaurant_id,
      order_id,
      comment,
      rating,
      active: true // Si decides usar el campo active
    }).returning('*');

    // Calcular el nuevo rating promedio del restaurante
    const ratings = await db('comments')
      .where({ restaurant_id, active: true })
      .avg('rating as average_rating')
      .first();

    const averageRating = ratings.average_rating ? parseFloat(ratings.average_rating).toFixed(2) : null;

    // Actualizar el rating promedio en la tabla de restaurantes
    await db('restaurants').where({ id: restaurant_id }).update({ rating: averageRating });

    res.status(201).json({ newComment, averageRating });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Error creating comment' });
  }
};

module.exports = createComment;





  
  