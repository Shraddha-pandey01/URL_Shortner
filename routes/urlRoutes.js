const router = require("express").Router()
const urlController = require("../src/controllers/urlController")

router.post('/shorten', urlController.shortenUrl)
router.get('/:shortCode', urlController.redirectUrl)

module.exports = router