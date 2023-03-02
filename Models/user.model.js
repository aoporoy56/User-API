// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     name : {
//         type : String,
//         required : true,
//     },
//     age : {
//         type : Number,
//         require : true
//     }
// })
// module.exports = mongoose.model("user",productSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : [true, "You must enter your name"]
    },
    age : {
        type : Number,
        required : [true, "Your must enter your age"]
    }
})
const User = mongoose.model("User", userSchema);
module.exports = User;