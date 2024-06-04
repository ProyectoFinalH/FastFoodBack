const {Router}=require("express");
const { getUsersHandler } = require("../handlers/userHandler/getUsers");
const { createUserHandler } = require("../handlers/userHandler/createUser");
const { getDetailUserHandler } = require("../handlers/userHandler/getDetailUser");
const { putUserHandler } = require("../handlers/userHandler/putUser");
const { loginUserHandler } = require("../handlers/userHandler/loginUser");
const { loginGoogleHandler } = require("../handlers/userHandler/loginGoogle");
const passport=require('passport')
const userRouter=Router();


userRouter.get("/loginGoogle",passport.authenticate('google',{scope:['profile','email']}));

// userRouter.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//     const token = jwt.sign({ id: req.user.id, email: req.user.email, role_id: req.user.role_id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });
//     res.redirect(`/?token=${token}`);
//   });

userRouter.get("/",getUsersHandler);
userRouter.get("/:id",getDetailUserHandler);
userRouter.put("/:id",putUserHandler);
userRouter.post("/create",createUserHandler);
userRouter.post("/login",loginUserHandler);
// userRouter.delete("/:id",deleteUserHandler);


module.exports=userRouter;