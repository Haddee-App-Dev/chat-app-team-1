
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function UniversalAppContainer(props) {
    return (
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});