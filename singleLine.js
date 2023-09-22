// singleLine.js
const gradient = require("gradient-string");
const { generateGradient } = require("./gradient");

const gradients = {
  teen: gradient.teen,
  mind: gradient.mind,
  morning: gradient.morning,
  vice: gradient.vice,
  passion: gradient.passion,
  fruit: gradient.fruit,
  instagram: gradient.instagram,
  atlas: gradient.atlas,
  retro: gradient.retro,
  summer: gradient.summer,
  pastel: gradient.pastel,
  rainbow: gradient.rainbow,
};

function logSingleLine(input) {
  const randomGradient = generateGradient();
  const selectedGradient = gradients[randomGradient] || gradients.rainbow;

  console.log(selectedGradient(input));
}

module.exports = { logSingleLine };