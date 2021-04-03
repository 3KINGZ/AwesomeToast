import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ToastIcon from "./ToastIcon";
import { generateBgColor, generateBorderColor } from "../utils/generateColor";

//This is the redefined alert system for react-native it works like toast
//The toast appears as an overlay over any view

const Toast = ({ text, type = "informational", visible, onClose }) => {
  if (!visible) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: generateBgColor(type) },
        { borderColor: generateBorderColor(type) },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <ToastIcon type={type} />
        <Text numberOfLines={1} style={styles.toastText}>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={onClose}>
        <Icon name="close" size={30} color="#6c7684" />
      </TouchableOpacity>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: "90%",
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    zIndex: 1,
    borderWidth: 0.8,
    borderRadius: 12,
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  toastText: {
    marginTop: 5,
    width: "75%",
    marginLeft: 10,
    fontSize: 18,
    color: "#3c4550",
  },
});
