import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Prompt from "../components/Prompt";
import Icon from "react-native-vector-icons/Ionicons";

export const PromptDemo = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <View>
      <Button title="show prompt" onPress={() => setShowPrompt(!showPrompt)} />

      <Prompt visible={showPrompt} onClose={() => setShowPrompt(!showPrompt)}>
        <View style={styles.promptContainer}>
          <TouchableOpacity onPress={() => setShowPrompt(!showPrompt)}>
            <Icon
              name="close"
              style={{ alignSelf: "flex-end" }}
              color="#9d9d9d"
              size={24}
            />
          </TouchableOpacity>
          <Text style={[styles.promptText, styles.title]}>Hello</Text>
          <Text style={[styles.promptText, styles.subtitle]}>
            This is a Prompt
          </Text>
          <Text style={styles.promptText}>It works like a modal</Text>
        </View>
      </Prompt>
    </View>
  );
};

const styles = StyleSheet.create({
  promptContainer: {
    backgroundColor: "#ecebeb",
    padding: 10,
    flex: 1,
    height: "50%",
  },
  promptText: {
    textAlign: "center",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    color: "#df1717",
  },
  subtitle: {
    color: "#0a0706",
  },
});
