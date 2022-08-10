/**
 * To validate deadline having valid date.
 * @param {string} deadline
 * @return {boolean}
 */
function deadlineValidator(deadline) {
  const deadlineSplit = deadline.split('/');
  const day = parseInt(deadlineSplit[0]);
  const month = parseInt(deadlineSplit[1]);
  const year = parseInt(deadlineSplit[2]);

  if (day < 1 || day > 31) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }

  const monthToDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    monthToDays[1] = 29;
  }

  if (day > monthToDays[month - 1]) {
    return false;
  }

  return true;
}

module.exports = deadlineValidator;
