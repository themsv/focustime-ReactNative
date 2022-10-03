import { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import FocusHistory from "./src/components/FocusHistory";
import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";
import { colors } from "./src/utils/colors";

function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <>
        {!currentSubject ? (
          <>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            currentSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject]);
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 50 : 0,
  },
});

export default App;
