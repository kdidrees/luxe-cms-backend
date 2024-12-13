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

exports.updateBlogService = async (blogId, updateData) => {
  try {
    const result = await BlogModel.findByIdAndUpdate(
      blogId,
      { blog: updateData },
      {
        new: true,
      }
    );
    console.log(updateData, "ye hai");
    return result;
  } catch (error) {
    throw new CustomError(500, "internal server error");
  }
};

exports.deleteBlogService = async (blogId) => {
  try {
    const result = await BlogModel.findByIdAndDelete(blogId);

    if (!result) {
      throw new CustomError(404, "No blog found with this ID");
    }

    result;
  } catch (error) {
    throw new CustomError(500, "Internal Server Error");
  }
};
