require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const ConnectDataBase = require("./config/db");
const cors = require("cors");
const errorHandler = require('./middlewares/errorMiddleware');

// Routes
const pageRoutes = require("./routes/pageRoutes");
const componentRoutes = require("./routes/componentRoutes");
const fileRoutes = require("./routes/fileRoutes");
const serviceRoutes = require("./routes/servicesRoutes");
const blogRoutes = require("./routes/blogRoute");

dotenv.config();

const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler);

// connect database here
ConnectDataBase();

// use routes
app.use("/api/pages", pageRoutes);
app.use("/api/components", componentRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(process.env.PORT, () => {
  console.log(`the server is running at port ${process.env.PORT}`);
});
