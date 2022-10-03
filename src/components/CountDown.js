import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const formatTime = (time) => (time < 10 ? `0${time}` : time);
const minutesToMillis = (min) => min * 1000 * 60;

const CountDown = ({ minutes, isPaused, onEnd, setProgress }) => {
  const [millis, setMillis] = useState(null);

  let interval = null;
  const _minutes = Math.floor(millis / 1000 / 60) % 60;
  const _seconds = Math.floor(millis / 1000) % 60;

  const countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval);
        onEnd();
        return time;
      }
      return time - 1000;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    setProgress(1 - millis / minutesToMillis(minutes));
  }, [millis]);
  useEffect(() => {
    isPaused
      ? clearInterval(interval)
      : (interval = setInterval(countdown, 1000));
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <View style={styles.container}>
      <Text style={styles.remainingTime}>
        {formatTime(_minutes)}:{formatTime(_seconds)}
      </Text>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing.lg,
  },
  remainingTime: {
    fontSize: fontSizes.xxxl,
    color: colors.darkBlue,
  },
});
