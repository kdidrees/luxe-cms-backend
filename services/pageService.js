const Page = require("../models/pageModel");
const Component = require("../models/componentModel");
const CustomError = require("../utils/customError");

// Create a new page with associated components
const createPage = async (pageName, components) => {
  if (!components || components.length === 0) {
    throw new Error("No components provided");
  }

  try {
    const componentPromises = components.map(async (component) => {
      const newComponent = new Component({
        type: component.type,
        data: component.data,
      });

      return await newComponent.save();
    });

    const savedComponents = await Promise.all(componentPromises);

    const newPage = new Page({
      pageName: pageName,
      components: savedComponents.map((comp) => comp._id),
    });

    const savedPage = await newPage.save();

    return savedPage;
  } catch (error) {
    throw new Error(
      "Error while creating the page or components: " + error.message
    );
  }
};

module.exports = {
  createPage,
};
