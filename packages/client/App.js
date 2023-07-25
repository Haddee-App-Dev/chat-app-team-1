import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, SafeAreaView } from "react-native";
import { ChatScreen } from './screens/chatscreen';
import { ContactScreen } from './screens/contactscreen';
import { SelfProfileScreen } from "./screens/profile";
import { Login } from "./screens/login";
import { SignUp } from "./screens/signup";
import { Icon } from 'react-native-elements';
import { PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql.js";

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
    <ApolloProvider client={client}>
      <PaperProvider>
        <SafeAreaView style={styles.root}>
          <NavigationContainer >
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </ApolloProvider>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "F9FBFC",
  },
});