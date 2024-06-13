const { Router } = require("express");
const passport = require('../config/googleAuth');
const { getUsersHandler } = require("../handlers/userHandler/getUsers");
const { createUserHandler } = require("../handlers/userHandler/createUser");
const { getDetailUserHandler } = require("../handlers/userHandler/getDetailUser");
const { putUserHandler } = require("../handlers/userHandler/putUser");
const { loginUserHandler } = require("../handlers/userHandler/loginUser");
const { loginGoogleHandler } = require("../handlers/userHandler/loginGoogle");
const { deleteUserHandler } = require("../handlers/userHandler/deleteUser");
const { restoreUserHandler } = require("../handlers/userHandler/restoreUser");

const parser = require("../config/multer");
const { getAllUsersHandler } = require("../handlers/userHandler/getAllUsers");




const userRouter = Router();

// Rutas de autenticación con Google
userRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
userRouter.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirige a la página de inicio o a otra página después de la autenticación exitosa
  }
);

// Ruta para manejar el login de Google desde el frontend
userRouter.post("/auth/google", loginGoogleHandler);

// Otras rutas de usuario
userRouter.get("/", getUsersHandler);
userRouter.get("/all",getAllUsersHandler);
userRouter.get("/:id", getDetailUserHandler);
userRouter.put("/:id",parser.single('image_url'), putUserHandler);
userRouter.post("/create", createUserHandler);
userRouter.post("/login", loginUserHandler);
userRouter.put("/delete/:id", deleteUserHandler);
userRouter.put("/restore/:id", restoreUserHandler);

module.exports = userRouter;

