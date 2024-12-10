require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ConnectDataBase = require("./config/db");

// Routes
const pageRoutes = require("./routes/pageRoutes");
const componentRoutes = require("./routes/componentRoutes");

dotenv.config();

const app = express();
// middlewares
app.use(express.json());
app.use("/images", express.static("Public/images"));

// connect database here
ConnectDataBase();

// use routes
app.use("/api/pages", pageRoutes);
app.use("/api/components", componentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`the server is running at port ${process.env.PORT}`);
});
