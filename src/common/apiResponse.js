/**
 * Represents an API response.
 * @typedef {Object} ApiResponse
 */
class ApiResponse {
  statusCode;
  message;
  data;

  /**
   * @constructor
   * @param {number} statusCode - The status code of the response.
   * @param {string} message - The message of the response.
   * @param {Object[]} data - The data of the response.
   */
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponse;
