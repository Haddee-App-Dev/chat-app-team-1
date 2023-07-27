import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, ContactScreen, SelfProfileScreen, Login, SignUp } from './screens';
import { UniversalAppContainer } from './components';
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
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Chats" component={ChatScreen} options={{
        headerShown: false,
        tabBarIcon: () => (<Icon name="chat" />)
      }} />
      <Tab.Screen name="Contacts" component={ContactScreen} options={{
        headerShown: false,
        tabBarIcon: () => (<Icon name="person" />)
      }} />
      <Tab.Screen name="Me" component={SelfProfileScreen} options={{
        headerShown: false,
        tabBarIcon: () => (<Icon name="person" />),
      }} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <UniversalAppContainer>
          <NavigationContainer >
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </UniversalAppContainer>
      </PaperProvider>
    </ApolloProvider>
  );
};