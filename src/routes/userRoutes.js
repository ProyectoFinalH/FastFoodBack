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
userRouter.get("/",getUsersHandler);
userRouter.get("/:id",getDetailUserHandler);
userRouter.put("/:id",putUserHandler);
userRouter.post("/create",createUserHandler);
userRouter.post("/login",loginUserHandler);
// userRouter.delete("/:id",deleteUserHandler);


module.exports=userRouter;