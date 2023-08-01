import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { UniversalAppContainer } from './components';
import { PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql.js";
import { AppNavigation } from './navigation';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <UniversalAppContainer>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </UniversalAppContainer>
      </PaperProvider>
    </ApolloProvider>
  );
};