import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { ChatScreen } from './components/chatscreen';
import { ContactScreen } from './components/contactscreen';
import { SelfProfileScreen } from "./components/profile";
import { LoginScreen } from "./screens/Login";
import { Icon } from 'react-native-elements';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Tab.Navigator>
          <Tab.Screen name="Chats" component={ChatScreen} options={{
            tabBarIcon: () => (<Icon name="chat" />)
          }} />
          <Tab.Screen name="Contacts" component={ContactScreen} options={{
            tabBarIcon: () => (<Icon name="person" />)
          }} />
          <Tab.Screen name="Me" component={SelfProfileScreen} options={{
            headerShown: false,
            tabBarIcon: () => (<Icon name="person" />)
          }} />
        </Tab.Navigator>
      </Stack.Navigator>
    </NavigationContainer>
  );
};