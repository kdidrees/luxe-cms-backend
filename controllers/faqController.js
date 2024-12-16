const faqService = require("../services/faqService");

exports.createFaq = async (req, res, next) => {
  const { data } = req.body;
  try {
    const result = await faqService.createFaq(data);
    return res.status(201).json({
      status: "success",
      message: "faq created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.addFaq = async (req, res, next) => {
  const { data } = req.body;
  try {
    const result = await faqService.addFaq(data);
    return res.status(201).json({
      status: "success",
      message: "faq added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFaq = async (req, res, next) => {
  const faqId = req.params.id;
  try {
    const result = await faqService.deleteFaq(faqId);
    return res.status(200).json({
      status: "success",
      message: "faq deleted successfully",
      result,
    });
  } catch (error) {
    next(error);
  }
};
