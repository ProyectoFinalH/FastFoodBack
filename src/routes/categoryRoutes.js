const {Router}=require("express");
const { getCategoriesHandler } = require("../handlers/categoryHandler/getCategories");
const { createCategoryHandler } = require("../handlers/categoryHandler/createCategory");
const { getDetailCategoryHandler } = require("../handlers/categoryHandler/getDetailCategory");
const { putCategoryHandler } = require("../handlers/categoryHandler/putCategory");
const { deleteCategoryHandler } = require("../handlers/categoryHandler/deleteCategory");
const { restoreCategoryHandler } = require("../handlers/categoryHandler/restoreCategory");
const { getAllCategoriesHandler } = require("../handlers/categoryHandler/getAllCategories");

const categoryRouter=Router();


categoryRouter.get("/",getCategoriesHandler);
categoryRouter.get("/all",getAllCategoriesHandler);
categoryRouter.get("/:id",getDetailCategoryHandler);
categoryRouter.put("/:id",putCategoryHandler);
categoryRouter.post("/create",createCategoryHandler);
categoryRouter.put("/delete/:id",deleteCategoryHandler);
categoryRouter.put("/restore/:id",restoreCategoryHandler);


module.exports=categoryRouter;