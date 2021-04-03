import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Toast from "../components/Toast";

export const Alert = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="show alert" onPress={() => setShowToast(true)} />
      <Toast
        text="A informational toast"
        type="informational"
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fafaf9",
    paddingHorizontal: 10,
  },
  bigText: {
    textAlign: "center",
    fontSize: 80,
  },
});
