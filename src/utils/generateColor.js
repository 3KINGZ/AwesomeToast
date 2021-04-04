const { colors } = require("../config/colors");

export const generateBgColor = (type) => {
  const colorName = type + "Opacity";
  const color = colors[colorName];
  if (!color) {
    return null;
  }
  return color;
};

export const generateBorderColor = (type) => {
  const color = colors[type];
  if (!color) {
    return null;
  }
  return color;
};
