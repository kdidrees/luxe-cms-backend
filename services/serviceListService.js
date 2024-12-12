const ServiceList = require("../models/serviceModel");
const CustomError = require("../utils/customError");

exports.createServiceList = async (servicesListData) => {
  try {
    const serviceList = new ServiceList(servicesListData);
    await serviceList.save();
    return serviceList;
  } catch (error) {
    throw new CustomError(500, error.message);
  }
};

exports.getServiceList = async () => {
  try {
    const serviceList = await ServiceList.find();
    return serviceList;
  } catch (error) {
    throw new CustomError(500, "error fetching service list");
  }
};
