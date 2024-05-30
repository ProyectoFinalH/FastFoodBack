const {Router}=require("express");
const { getUsersHandler } = require("../handlers/userHandler/getUsers");
const userRouter=Router();

userRouter.get("/",getUsersHandler);
// userRouter.get("/:id",getDetailUserHandler);
// userRouter.put("/:id",putUserHandler);
// userRouter.post("/create",createUserHandler);
// userRouter.post("/login",loginUserHandler);
// userRouter.delete("/:id",deleteUserHandler);


module.exports=userRouter;