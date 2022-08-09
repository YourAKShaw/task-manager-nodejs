/**
 * generate a random 6 digit id
 * @return {number}
 */
function generateId() {
  return Math.floor(Math.random() * 1000000);
}

module.exports = generateId;
