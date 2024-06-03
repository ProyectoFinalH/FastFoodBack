const {Router}=require("express");
const { getCategoriesHandler } = require("../handlers/categoryHandler/getCategories");
const { createCategoryHandler } = require("../handlers/categoryHandler/createCategory");

const categoryRouter=Router();


categoryRouter.get("/",getCategoriesHandler);
//categoryRouter.get("/:id",getDetailCategoryHandler);
// categoryRouter.put("/:id",putCategoryHandler);
categoryRouter.post("/create",createCategoryHandler);
// categoryRouter.delete("/:id",deleteCategoryHandler);


module.exports=categoryRouter;