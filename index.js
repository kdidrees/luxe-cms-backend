require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const ConnectDataBase = require("./config/db");

// Routes
const pageRoutes = require("./routes/pageRoutes");
const componentRoutes = require("./routes/componentRoutes");
const fileRoutes = require("./routes/fileRoutes");
const serviceRoutes = require("./routes/servicesRoutes");

dotenv.config();

const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect database here
ConnectDataBase();

// use routes
app.use("/api/pages", pageRoutes);
app.use("/api/components", componentRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/services", serviceRoutes);

app.listen(process.env.PORT, () => {
  console.log(`the server is running at port ${process.env.PORT}`);
});
