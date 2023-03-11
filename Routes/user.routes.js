const express = require("express");
const { getUser, addUser, deleteUser, getSingleUser, editUser } = require("../Controllers/user.controller");

const Router = express.Router();

Router.get("/user", getUser);
Router.get("/user/:id", getSingleUser);
Router.post("/user", addUser);
Router.delete("/user/:id", deleteUser);
Router.put("/user/:id", editUser);

module.exports = Router;