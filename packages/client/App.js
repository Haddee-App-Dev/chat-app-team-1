import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { ChatScreen } from './components/chatScreen';
import { ContactScreen } from './components/contactScreen';
import { SelfProfileScreen } from "./components/profile";
import LoginScreen from "./screens/login";
import SignUpScreen from "./screens/signUp";
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home "
    >
      <Tab.Screen name="Chats" component={ChatScreen} options={{
        tabBarIcon: () => (<Icon name="chat" />)
      }} />
      <Tab.Screen name="Contacts" component={ContactScreen} options={{
        tabBarIcon: () => (<Icon name="person" />)
      }} />
      <Tab.Screen name="Me" component={SelfProfileScreen} options={{
        tabBarIcon: () => (<Icon name="person" />)
      }} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <View style={styles.root}>
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "F9FBFC",
  },
});