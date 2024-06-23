const {Router}=require("express");
const { getCategoriesHandler } = require("../handlers/categoryHandler/getCategories");
const { createCategoryHandler } = require("../handlers/categoryHandler/createCategory");
const { getDetailCategoryHandler } = require("../handlers/categoryHandler/getDetailCategory");
const { putCategoryHandler } = require("../handlers/categoryHandler/putCategory");
const { deleteCategoryHandler } = require("../handlers/categoryHandler/deleteCategory");
const { restoreCategoryHandler } = require("../handlers/categoryHandler/restoreCategory");
const { getAllCategoriesHandler } = require("../handlers/categoryHandler/getAllCategories");
const { getCategoriesRestaurantHandler } = require("../handlers/categoryHandler/getCategoriesRestaurant");
const { getCategoriesHomeHandler } = require("../handlers/categoryHandler/getCategoriesHome");
const { ensureRestaurant, ensureAdmin } = require("../middleware/ensureAuth");

const categoryRouter=Router();

categoryRouter.get("/restaurant/:id",ensureRestaurant,getCategoriesRestaurantHandler);
categoryRouter.get("/home/:id",getCategoriesHomeHandler);
categoryRouter.get("/",getCategoriesHandler);
categoryRouter.get("/all",ensureAdmin,getAllCategoriesHandler);
categoryRouter.get("/:id",getDetailCategoryHandler);
categoryRouter.put("/:id",ensureRestaurant,putCategoryHandler);
categoryRouter.post("/create",ensureRestaurant,createCategoryHandler);
categoryRouter.put("/delete/:id",ensureRestaurant,deleteCategoryHandler);
categoryRouter.put("/restore/:id",ensureRestaurant,restoreCategoryHandler);


module.exports=categoryRouter;