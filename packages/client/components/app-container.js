
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function UniversalAppContainer(props) {
    return (
        <SafeAreaView style={styles.root}>
            {props.children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});