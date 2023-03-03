const Product = require("../models/productModel");

const all_product= async(req,res)=>{
    const products=await Product.find();
    res.send(products);
  }


  const add_product=async (req,res) => {
    
    const newProduct = new Product(req.body);
    const saveP = await newProduct.save();
    res.send(saveP)
  }
  const delete_product=async (req,res)=>{
    const deleteProduct=await Product.findByIdAndDelete(req.params.id) ;
    res.send(deleteProduct)
  }

  
module.exports={
    all_product,
    add_product,delete_product
}