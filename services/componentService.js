const Component = require("../models/componentModel");
const CustomError = require("../utils/customError");

const updateComponentById = async (id, updateData) => {
  try {
    const updatedComponent = await Component.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    return updatedComponent;
  } catch (error) {
    throw new CustomError(error.message);
  }
};

module.exports = { updateComponentById };
