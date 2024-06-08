const { Router } = require("express");
const { getUsersHandler } = require("../handlers/userHandler/getUsers");
const { createUserHandler } = require("../handlers/userHandler/createUser");
const { getDetailUserHandler } = require("../handlers/userHandler/getDetailUser");
const { putUserHandler } = require("../handlers/userHandler/putUser");
const { loginUserHandler } = require("../handlers/userHandler/loginUser");
const { loginGoogleHandler } = require("../handlers/userHandler/loginGoogle");
const { deleteUserHandler } = require("../handlers/userHandler/deleteUser");
const { restoreUserHandler } = require("../handlers/userHandler/restoreUser");

const userRouter = Router();

userRouter.post("/auth/google", loginGoogleHandler);
userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getDetailUserHandler);
userRouter.put("/:id", putUserHandler);
userRouter.post("/create", createUserHandler);
userRouter.post("/login", loginUserHandler);
userRouter.put("/delete/:id", deleteUserHandler);
userRouter.put("/restore/:id", restoreUserHandler);

module.exports = userRouter;
