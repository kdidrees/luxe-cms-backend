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

exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { updateData } = req.body;

    const result = await blogService.updateBlogService(blogId, updateData);
    return res.status(200).json({
      status: "success",
      message: "blog updated successfully",
      blog: result.blog,
    });
  } catch (error) {
    throw new CustomError(500, "error creating blog");
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await blogService.deleteBlogService(blogId);
    return res.status(200).json({
      status: "success",
      message: "blog deleted successfully",
    });
  } catch (error) {
    throw new CustomError(500, "error creating blog");
  }
};
