const Component = require("../models/componentModel");
const CustomError = require("../utils/customError");

const getComponentById = async (id) => {
  try {
    const component = await Component.findById(id);
    return component;
  } catch (error) {
    throw new CustomError(error.message);
  }
};
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

module.exports = { updateComponentById, getComponentById };
