import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export function SelfProfileScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <Text>Profile!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})