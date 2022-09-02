/**
 * generate a random 6 digit id
 * @return {number}
 */
function generateId() {
  return Math.floor(100000 + Math.random() * 900000);
}

module.exports = generateId;
