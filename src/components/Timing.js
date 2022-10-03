import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RoundedButton } from "./RoundedButton";

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton title={10} size={80} onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title={15} size={80} onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title={30} size={80} onPress={() => onChangeTime(30)} />
      </View>
    </>
  );
};

export default Timing;

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
