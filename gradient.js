// gradient.js

const gradients = [
  "teen",
  "mind",
  "morning",
  "vice",
  "passion",
  "fruit",
  "instagram",
  "atlas",
  "retro",
  "summer",
  "pastel",
  "rainbow",
];
  
function generateGradient() {
  const randomIndex = Math.floor(Math.random() * gradients.length);

  return gradients[randomIndex];
}
  
module.exports = { generateGradient };