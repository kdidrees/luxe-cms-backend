const Page = require("../models/pageModel");
const CustomError = require("../utils/customError");

const createPage = async (pageData) => {
  try {
    const page = new Page(pageData);
    await page.save();
    return page;
  } catch (error) {
    throw new CustomError(500, "error while creating the page");
  }
};

const getPageByName = async (pageName) => {
  try {
    const page = Page.findOne({ pageName });

    if (!page) {
      throw new CustomError(404, "Page not found");
    }
    return page;
  } catch (error) {
    throw new CustomError(error);
  }
};

module.exports = {
  createPage,
  getPageByName,
};
