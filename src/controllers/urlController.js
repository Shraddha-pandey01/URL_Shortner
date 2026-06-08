const urlService = require("../services/urlServices");
const responseHelper = require("../../helpers/responseHelper")

const shortenUrl = async(req, res) => {
 try {
    const data = await urlService.shortenUrl(req.body)
    responseHelper.handleSuccess(res, data)
 } catch (error) {
    responseHelper.handleError(res, error)
 }
}

const redirectUrl = async(req, res) => {
  try {
    const shortCode = await urlService.redirectUrl(req.params.shortCode)
    responseHelper.handleSuccess(res, shortCode)
  } catch (error) {
    responseHelper.handleError(res, error)
  }
}

module.exports = {
    shortenUrl,
    redirectUrl
}