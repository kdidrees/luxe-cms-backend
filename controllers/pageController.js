const pageService = require("../services/pageService");
const CustomError = require("../utils/customError");

const createPage = async (req, res, next) => {
  const { pageName, components } = req.body;

  console.log("Page Data:", { pageName, components });

  try {
    const page = await pageService.createPage(pageName, components);

    res.status(201).json({
      status: "success",
      message: "Page created successfully",
      data: page,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while creating the page ",
      error: error.message,
    });
  }
};

module.exports = { createPage };
