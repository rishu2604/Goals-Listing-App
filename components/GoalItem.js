import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) { 
    return (
        // Bind is a standard javascript function that allows you to pre-configure a function for future execution.
        // Now the first value you pass to bind sets the 'this' keyword in the to be executed function.
        // The second value you pass to bind will be the first parameter received by the to be called function.
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)} >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: "#5e0acc",
        borderRadius: 6,
        padding: 8,
    },
    goalText: {
        color: "white",
    }
})