const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const productSchema = new mongoose.Schema({
    id: String,
    title: String,
    imageUrl: String,
    desc: String,
    price: Number,
    sizes: [String]    
})

module.exports=productSchema