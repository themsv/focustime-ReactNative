import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing, fontSizes } from "../utils/sizes";

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;
const styles = StyleSheet.create({
  inputContainer: {
    padding: spacing.lg,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
    padding: spacing.sm,
    fontSize: fontSizes.md,
  },
  button: {
    justifyContent: "center",
  },
});
