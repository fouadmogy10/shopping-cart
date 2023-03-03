
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoutes")
mongoose.set('strictQuery', false);




app.use(bodyParser.json());

const URL = "mongodb://127.0.0.1:27017/shopping-cart"
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log("connected successfully");
}).catch((err) => {
    console.log(err);
});

app.use("/api/products", productRoute)

app.listen(27017, () => console.log("app running on port 27017"))