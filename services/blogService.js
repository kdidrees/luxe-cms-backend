const BlogModel = require("../models/blogModel");
const CustomError = require("../utils/customError");

exports.addBlogService = async (blog) => {
  try {
    const result = new BlogModel({ blog });
    result.save();
    return result;
  } catch (error) {
    throw new CustomError(500, "error while creating blogs");
  }
};
