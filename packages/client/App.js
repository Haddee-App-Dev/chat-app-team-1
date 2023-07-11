import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { ChatScreen } from './screens/chatscreen';
import { ContactScreen } from './screens/contactscreen';
import { SelfProfileScreen } from "./screens/profile";
import { Icon } from 'react-native-elements';
import { PaperProvider } from "react-native-paper";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </PaperProvider>
  );
};