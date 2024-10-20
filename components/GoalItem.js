import { View, Text, StyleSheet } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>
                {props.text}
            </Text>
        </View>
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