const User = require("../Models/user.model")

//all users
exports.getUser = async (req, res) => {
    const count = await User.countDocuments();
    const userList = await User.find({},{_id : 0});
    res.status(200).json({
        info : userList,
        count : count
    });
}
//single user
exports.getSingleUser = async (req, res) => {
    try {
        const singleUser = await User.find({id : req.params.id},{_id : 0});
        res.status(200).json({
            singleUser
        })
    } catch (error) {
        res.status(200).json({
            message : "Data Couldn't Find Out"
        })
    }
}

//add user
exports.addUser = async (req, res) => {
    const {name, age } = req.body;
    const count = await User.findOne().sort({id : -1});
    const newUser = new User({
        id : (count != null) ? count.id+1 : 1,
        name : name,
        age : age
    });
    try {
        const result = await newUser.save();
        if(result){
            res.status(200).json({
                message : "Data Added",
                data : result
            })
        }else{
            res.status(200).json({
                message :"Data Add Failed",
                data : result
            })
        }
    } catch (error) {
        res.status(200).json({
            message : error.message
        })
        console.log("Something wrong on add")
    }
}
//update user
exports.editUser = async (req, res) => {
    const {name , age} = req.body;
    try {
        const updateResult = await User.updateOne({ id : req.params.id}, {$set : {
            name : name,
            age : age
        }})
        res.status(200).json({
            message :(updateResult.modifiedCount) ? "Data Updated" : "Update Failed" ,
            info : updateResult
        })
    } catch (error) {
        res.status(200).json({
            message : "Update Failed",
            info : error.message
        })
    }
}

// delete user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await User.deleteOne({ id : id});
        if(result){
            res.status(200).json({
                message : "Data Delete Success",
                info : result
            })
        }else{
            res.status(200).json({
                message : "Data Delete Failed",
                info : result
            })
        }
    } catch (error) {
        res.status(200).json({
            message : " Delete Failed",
            info : error.message
        })
    }
}