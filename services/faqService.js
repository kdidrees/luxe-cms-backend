const FaqModel = require("../models/faqModel");
const CustomError = require("../utils/customError");

exports.createFaq = async (data) => {
  try {
    const faqExist = await FaqModel.findOne();

    if (faqExist) {
      throw new CustomError("faq already exist");
    }

    const faq = new FaqModel(data);
    await faq.save();
    return faq;
  } catch (error) {
    throw new CustomError(500, "error creating faq");
  }
};

exports.addFaq = async (data) => {
  try {
    const faq = await FaqModel.findOne();
    faq.faqs.push(data);
    await faq.save();

    return faq;
  } catch (error) {
    throw new CustomError(500, "error creating faq");
  }
};

exports.deleteFaq = async (faqId) => {
  try {
    const faq = await FaqModel.findOne();
    faq.faqs = faq.faqs.filter((faq) => faq._id.toString() !== faqId);
    await faq.save();
  } catch (error) {
    throw new CustomError(500, "error creating faq");
  }
};
