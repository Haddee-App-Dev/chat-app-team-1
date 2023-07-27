import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { ChatScreenHeader } from '../components';

export function SelfProfileScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <ChatScreenHeader headerTitle="Profile" />
            <Text>Profile!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})