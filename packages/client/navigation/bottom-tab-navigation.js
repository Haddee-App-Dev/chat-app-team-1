import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, ContactScreen, SelfProfileScreen } from '../screens';
//Consider using community icons
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Chats" component={ChatScreen} options={{
                tabBarIcon: () => (<Icon name="chat" />)
            }} />
            <Tab.Screen name="Contacts" component={ContactScreen} options={{
                tabBarIcon: () => (<Icon name="person" />)
            }} />
            <Tab.Screen name="Me" component={SelfProfileScreen} options={{
                tabBarIcon: () => (<Icon name="person" />),
            }} />
        </Tab.Navigator>
    )
}