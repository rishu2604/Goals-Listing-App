// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react";
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoal,
    ]);
    setEnteredGoal("");
    // setCourseGoals([...courseGoals, enteredGoal]);
    // You can do this way too, but it is not recommended by React official documentation
    // React's official documentation says that if your new state depends on the previous state, a better way is to pass a function to the setter function (state updating function)
    // This is because React schedules state updates, so if you rely on the previous state, you may run into issues
    // Because React executes state in batches.
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      {/* ScrollView has the job of making the content scrollable, but the area that's scrollable is in the end determined by the parent container that holds the ScrollView */}
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>
                {goal}
              </Text>
            </View>
            // We have to add <View> component here because borderRadius property does not work on <Text> component in ios
            // It does works in android, but not in ios
            // The reason might be that the native component in which <Text> component compiles into in ios does not support borderRadius property
            // And also the cascading nature of CSS (where child elements and descendant elements, inherit styles from parent and ancestor elements) does not work in React Native
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    padding: 8
  },
  goalText: {
    color: "white",
  },
});
