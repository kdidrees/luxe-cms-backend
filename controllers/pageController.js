const pageService = require("../services/pageService");
const CustomError = require("../utils/customError");


const createPage = async(req,res,next)=>{
  const {pageName,components} = req.body;

  try {
    if(!pageName || !components){
        throw new CustomError(400,'page name and components are required');
    }

    const pageData = {pageName,components}
    const createdPage = await pageService.createPage(pageData);
    return res.status(201).json({
        status:'success',
        message:"page created successfully",
        data:createdPage
    })

  } catch (error) {
    next(error)
  }
}


module.exports = {createPage}