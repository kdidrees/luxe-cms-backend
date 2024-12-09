const mongoose = require("mongoose");
const Page = require('../models/pageModel');


const ConnectDataBase = function () {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }

};

module.exports = ConnectDataBase;
