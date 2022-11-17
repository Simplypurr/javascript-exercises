const ftoc = function (temp) {
  const result = Math.round((temp - 32) * (5 / 9) * 10) / 10;
  return result;
};

const ctof = function (temp) {
  const result = +((temp * 1.8) + 32).toFixed(1);
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
