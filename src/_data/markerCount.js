const EleventyFetch = require("@11ty/eleventy-fetch");
require("dotenv").config();

module.exports = async function () {
  console.log(process.env.API_URL);
  const url = process.env.API_URL + "api/markers/count";

  /* This returns a promise */
  return EleventyFetch(url, { duration: "1s" });
};
