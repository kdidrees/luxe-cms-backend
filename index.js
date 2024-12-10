require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ConnectDataBase = require("./config/db");
const multer = require('multer');
const upload = multer();

// Routes
const pageRoutes = require("./routes/pageRoutes");
const componentRoutes = require("./routes/componentRoutes");
const fileRoutes = require('./routes/fileRoutes');


dotenv.config();

const app = express();
// middlewares
app.use(express.json());
app.use("/images", express.static("Public/images"));
app.use(express.urlencoded({extended:true}))

// connect database here
ConnectDataBase();

// use routes
app.use("/api/pages", pageRoutes);
app.use("/api/components", componentRoutes);
app.use('/api/files', fileRoutes);


app.listen(process.env.PORT, () => {
  console.log(`the server is running at port ${process.env.PORT}`);
});


