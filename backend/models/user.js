const mongoose = require("mongoose");
const { connectDB } = require("../../db/dbconnection");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const connection = connectDB();

class User {

    userId;

}