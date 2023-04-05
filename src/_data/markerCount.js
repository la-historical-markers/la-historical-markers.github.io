const EleventyFetch = require("@11ty/eleventy-fetch");
require("dotenv").config();

module.exports = async function () {
  const url = process.env.API_URL + "api/markers/count";

  /* This returns a promise */
  return EleventyFetch(url, { duration: "1s" });
};
