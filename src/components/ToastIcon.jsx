import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../config/colors";

const Success = () => {
  return (
    <View style={[styles.container, { backgroundColor: colors.success }]}>
      <Icon name="checkmark-circle" color="white" size={24} />
    </View>
  );
};

const Informational = () => {
  return (
    <View style={[styles.container, { backgroundColor: colors.informational }]}>
      <Icon name="information-circle" color="white" size={24} />
    </View>
  );
};

const Warning = () => {
  return (
    <View style={[styles.container, { backgroundColor: colors.warning }]}>
      <Icon name="warning" color="white" size={24} />
    </View>
  );
};

const Danger = () => {
  return (
    <View style={[styles.container, { backgroundColor: colors.danger }]}>
      <Icon name="warning" color="white" size={24} />
    </View>
  );
};

const ToastIcon = ({ type }) => {
  switch (type) {
    case "success":
      return <Success />;
    case "informational":
      return <Informational />;
    case "warning":
      return <Warning />;
    case "danger":
      return <Danger />;
    default:
      return null;
  }
};

export default ToastIcon;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 10,
  },
});
