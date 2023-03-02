const express = require("express");
const Router = require("./Routes/user.routes");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;


mongoose.connect("mongodb+srv://root:EAIhKvVS31J1spin@cluster0.aku2ier.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Database connect")
})
.catch(() =>{
    console.log("Database Connected Failed");
})

const app = express();

app.use(express.urlencoded({extended : true}))
app.use("/api/v1/",Router);

app.use("*",(req, res) => {
    res.status(200).json({
        message: "Unknown Route or Link or Method"
    })
})

app.listen(PORT, (err) => {
    console.log("Server Running on : "+PORT);
})
