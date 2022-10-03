import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { ProgressBar } from "react-native-paper";
import CountDown from "../components/CountDown";
import Timing from "../components/Timing";
import { RoundedButton } from "../components/RoundedButton";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const Timer = ({ currentSubject, clearSubject, onTimerEnd }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = () => {
    const pattern = [1000, 2000];
    Vibration.vibrate(pattern);
    setIsStarted(false);
    onTimerEnd(currentSubject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countDownWrapper}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={onEnd}
          setProgress={setProgress}
        />
        <Text style={styles.focusText}>Focusing on {currentSubject}</Text>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar color={colors.white} progress={progress} />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton title="-" onPress={clearSubject} size={70} />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDownWrapper: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  focusText: {
    fontSize: fontSizes.lg,
    color: colors.white,
  },
  progressBar: {
    marginTop: 20,
    padding: 20,
  },
  timingWrapper: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
});
