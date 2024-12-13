const componentService = require("../services/componentService");
const CustomError = require("../utils/customError");

const getComponentById = async (req, res,next) => {
  const { id } = req.params;

  try {
    const Component = await componentService.getComponentById(id);

    if (!Component) {
      return res.status(404).json({
        status: "failed",
        message: "component not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "component fetched successfully",
      data: Component,
    });
  } catch (error) {
   next(error)
  }
};

const updateComponent = async (req, res,next) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedComponent = await componentService.updateComponentById(
      id,
      updateData
    );

    if (!updatedComponent) {
      return res.status(404).json({
        status: "failed",
        message: "component not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "component updated successfully",
      data: updatedComponent,
    });
  } catch (error) {
   next(error)
  }
};

module.exports = { updateComponent, getComponentById };
