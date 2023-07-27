import { SafeAreaView, Text } from 'react-native';
import { ChatScreenHeader } from '../components';

export function ContactScreen() {
    return (
        <SafeAreaView>
            <ChatScreenHeader headerTitle="Contacts" />
            <Text>Test</Text>
        </SafeAreaView>
    );
}