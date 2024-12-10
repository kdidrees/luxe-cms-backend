require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ConnectDataBase = require("./config/db");

// Routes
const pageRoutes = require("./routes/pageRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

dotenv.config();

const app = express();
// middlewares
app.use(express.json());
app.use("/images", express.static("Public/images"));

// connect database here
ConnectDataBase();

// use routes
app.use("/api/pages", pageRoutes);

app.listen(process.env.PORT, () => {
  console.log(`the server is running at port ${process.env.PORT}`);
});
