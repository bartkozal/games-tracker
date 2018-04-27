const NODE_ENV = process.env.NODE_ENV || "dev";
const API_PORT = process.env.PORT || 8080;
const API_TIMEOUT = 1000 * 40; // ms

module.exports = {
  NODE_ENV,
  API_PORT,
  API_TIMEOUT
};
