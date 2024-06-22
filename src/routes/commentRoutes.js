const {Router}=require("express");
const { getCommentsHandler } = require("../handlers/commentHandler/getComments");

const commentRouter=Router();


commentRouter.get("/",getCommentsHandler);
//commentRouter.get("/:id",getDetailCommentHandler);
// commentRouter.put("/:id",putCommentHandler);
//commentRouter.post("/create",createCommentHandler);
// commentRouter.delete("/:id",deleteCommentHandler);


module.exports=commentRouter;