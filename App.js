import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  course[(modalIsVisible, setModalIsVisible)] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
      // {text: enteredGoal, key: Math.random().toString()} We can do it like this too.
      // FlatList will automatically look for a key property
      // FlatList does work well with primitive values like strings, but it works even better with objects that have a key property

      // Now, if you don't have a property named key, because you are maybe getting data from an API and you can't influence its shape, and you don' want to transform it, just because flat list needs that key property.
      // You also got an alternative
      // you can use the keyExtractor prop on FlatList.
    ]);
    // setCourseGoals([...courseGoals, enteredGoal]);
    // You can do this way too, but it is not recommended by React official documentation
    // React's official documentation says that if your new state depends on the previous state, a better way is to pass a function to the setter function (state updating function)
    // This is because React schedules state updates, so if you rely on the previous state, you may run into issues
    // Because React executes state in batches.
    endGoalHandler();
  }

  function handleDelete(goalId) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {startAddGoalHandler && (
          <GoalInput
            onAddGoal={addGoalHandler}
            onCancel={endGoalHandler}
            visible={modalIsVisible}
          />
        )}
        <View style={styles.goalsContainer}>
          {/* We don't add key property in FlatList as we used to.
        Instead when using FlatList there are two main ways of adding keys to these list items. 
        The first approach is to turn your data values from primitive values like strings into objects that have a key property  */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              // Here, itemData is an object that has a key called item, which is the item that is currently being rendered
              return (
                <GoalItem text={itemData.item.text} onDelete={handleDelete} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            // keyExtractor prop wants a function as a value, which will automatically receive two parameter values (item, index).
            // These two values will be provided by FlatList.
            // keyExtractor is called to get a key which then under the hood will be attached to the item that is currently being rendered.
          />
          {/* ScrollView has the job of making the content scrollable, but the area that's scrollable is in the end determined by the parent container that holds the ScrollView */}
          {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>
                {goal}
              </Text>
            </View>
            ))}
        </ScrollView> */}
          {/* We have to add <View> component here because borderRadius property does not work on <Text> component in ios
        It does works in android, but not in ios
        The reason might be that the native component in which <Text> component compiles into in ios does not support borderRadius property
        And also the cascading nature of CSS (where child elements and descendant elements, inherit styles from parent and ancestor elements) does not work in React Native */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
  },
});

// So we got our scrollable list here, and this is implemented with this ScrollView.
// Now, this solution has one downside, one disadvantage though.
// ScrollView is great, if you wanna add scrolling around some content.
// For example, if you had an article, which would be too long to fit on a screen or you simply don't know which device sizes your users will be using and you wanna make sure that an article for example, is scrollable.
// In such situations, ScrollView is perfect.

// For lists as we have it here, it's not perfect though.
// The reason for that is, that lists like this could become very long.
// Sure, you might only have like 10 or 20 items on there.
// And especially for such a goal list, it's very likely that you have around that size or around that amount of items.
// But you could also have lists with hundreds or thousands of items.

// Now, what ScrollView does is, it always renders all the items that are inside of it whenever the overall UI is rendered.
// So even if an item is not currently on the screen, it is still rendered behind the scenes even though it's not visible yet.
// Because ScrollView renders all its child items, no matter if we're talking about 10, 20, or 10,000 items.
// And for very long list, this can become a performance issue.

// If you have a long list with dozens or hundreds or thousands of items, rendering them all at the beginning even though vast majority is not even visible to the user, will slow down the app.

// And of course, that's not something we want.

// Therefore ScrollView is great for limited amounts of content like an article which has a fixed end at some point.

// But for dynamic lists, which could become super long. We typical don't wanna use ScrollView.
// We can, but we typically don't want to, to avoid possible performance issues.

// A better solution for such scenarios is another built-in component that ships with React Native, the FlatList component, this is another component that will help scrolling.
// But as the name suggests, it's specifically built for scrollable lists.
// And internally, it will only render the items that are actually visible.
// And all the items that are off screen will only be loaded and rendered lazily as they are needed because the user is scrolling.
// Now, internally, FlatList will have a small threshold to make sure it already starts loading and rendering items before they are visible.
// But it will only render them as the user gets closer to them as the user is scrolling the list.

// If you have 1000 items in your list the vast majority of items will not be loaded and will not be rendered when using FlatList.
