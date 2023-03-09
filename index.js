const express = require("express");
const Router = require("./Routes/user.routes");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;
const CORS = require("cors");


mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Database connect")
})
.catch(() =>{
    console.log("Database Connected Failed");
})

const app = express();

app.use(express.urlencoded({extended : true}))
app.use("/api/v1/",Router);
app.use(CORS());

app.use("*",(req, res) => {
    res.status(200).json({
        message: "Unknown Route or Link or Method"
    })
})

app.listen(PORT, (err) => {
    console.log("Server Running on : "+PORT);
})
