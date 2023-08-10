import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, ContactScreen, SelfProfileScreen } from '../screens';
//Consider using community icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Network } from "../features/network/screens/network";
import { Chat } from "../features/chat/screens/chat";

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Chats" component={ChatScreen} options={{
                tabBarIcon: ({ size }) => {
                    return <Icon name="chat" size={size} />
                }
            }} />
            <Tab.Screen name="Contacts" component={ContactScreen} options={{
                tabBarIcon: ({ size }) => {
                    return <Icon name="account" size={size} />
                }
            }} />
            <Tab.Screen name="Me" component={SelfProfileScreen} options={{
                tabBarIcon: ({ size }) => {
                    return <Icon name="account" size={size} />
                }
            }} />
            <Tab.Screen name="Network" component={Network} options={{
                tabBarIcon: ({ size }) => {
                    return <Icon name="account-multiple" size={size} />
                }
            }} />
            {/* Temporary solution until add more navigation for a LIST of chats */}
            <Tab.Screen name="chat" component={Chat} options={{

            }} />
        </Tab.Navigator>
    )
}