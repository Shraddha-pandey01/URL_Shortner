const { nanoid } = require("nanoid");
const Url = require("../models/urlModel");

const shortenUrl = async (data) => {
 
  const existingUrl = await Url.findOne({
    originalUrl: data.originalUrl,
  });

  if (existingUrl) {
    throw new Error("URL already exists");
  }

  const shortCode = nanoid(10);

  const url = await Url.create({
    originalUrl: data.originalUrl,
    shortCode,
  });

  return url;
};

const redirectUrl = async (shortCode) => {
  const url = await Url.findOne({ shortCode });

  if (!url) {
    throw new Error("URL not found");
  }

  return url.originalUrl;
};

module.exports = {
  shortenUrl,
  redirectUrl,
};