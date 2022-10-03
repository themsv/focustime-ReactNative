import { View, Text, StyleSheet, FlatList } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  if (!history || !history.length)
    return <Text style={styles.title}>Nothing focused yet!!</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History will be displayed here</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: "bold",
  },
});
