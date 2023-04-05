require("dotenv").config();

module.exports = function () {
  return {
    url: process.env.API_URL,
  };
};
