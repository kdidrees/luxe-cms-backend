const blogService = require("../services/blogService");
const CustomError = require("../utils/customError");

exports.createBlog = async (req, res) => {
  try {
    const { blog } = req.body;

    const result = await blogService.addBlogService(blog);
    return res.status(201).json({
      status: "success",
      message: "blog created successfully",
      blog: result.blog,
    });
  } catch (error) {
    throw new CustomError(500, "error creating blog");
  }
};
