const serviceListService = require("../services/serviceListService");
const CustomError = require("../utils/customError");

exports.createServiceList = async (req, res) => {
  try {
    const { icon, title, image, services } = req.body;

    if (!icon || !title || !image || !services) {
      return res.status(400).json({
        status: "failed",
        message: "missing required fields",
      });
    }

    const serviceListData = { icon, title, image, services };
    const newServiceList = await serviceListService.createServiceList(
      serviceListData
    );

    return res.status(201).json({
      status: "success",
      message: "service created successfully",
      data: newServiceList,
    });
  } catch (error) {
    throw new CustomError(500, "server error while crewating list");
  }
};

exports.getServiceList = async (req, res) => {
  try {
    const result = await serviceListService.getServiceList();
    return res.status(200).json({
      status: "success",
      message: "services fetched successfully",
      data: result,
    });
  } catch (error) {
    throw new CustomError(500, error.message);
  }
};
