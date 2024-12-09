require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ConnectDataBase = require("./config/db");

// Routes 
const pageRoutes = require('./routes/pageRoutes');

dotenv.config();

const app = express();
// middlewares
app.use(express.json());

// connect database here
ConnectDataBase();

// use routes 
app.use('/api/pages',pageRoutes);


app.listen(process.env.PORT, () => {
  console.log(`the server is running at port ${process.env.PORT}`);
});
