const express = require("express");
const router =express.Router();
const productController =require("../controllers/productController")

router.get("/",productController.all_product)

router.post("/",productController.add_product)

router.delete("/:id",productController.delete_product)

module.exports=router;