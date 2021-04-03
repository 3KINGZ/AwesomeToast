const { colors } = require("../config/colors");

export const generateBgColor = (type) => {
  if (type === "success") {
    return colors.successOpacity;
  } else if (type === "informational") {
    return colors.informationalOpacity;
  } else if (type === "warning") {
    return colors.warningOpacity;
  } else if (type === "danger") {
    return colors.dangerOpacity;
  } else {
    return null;
  }
};

export const generateBorderColor = (type) => {
  if (type === "success") {
    return colors.success;
  } else if (type === "informational") {
    return colors.informational;
  } else if (type === "warning") {
    return colors.warning;
  } else if (type === "danger") {
    return colors.danger;
  } else {
    return null;
  }
};
