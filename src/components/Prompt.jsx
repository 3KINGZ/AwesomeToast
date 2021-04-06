import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

//This is a prompt it works like a modal

const Prompt = ({ visible, children, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <GestureRecognizer onSwipeDown={closeModal}>
      <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
        <View style={styles.container}>{children}</View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "0%",
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    overflow: "hidden",
  },
});

export default Prompt;
