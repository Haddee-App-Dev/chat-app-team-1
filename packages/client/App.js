import 'react-native-gesture-handler';
import * as React from 'react';
import { UniversalAppContainer } from './components';
import { PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql.js";
import { AppNavigation } from './navigation';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <RecoilRoot>
          <UniversalAppContainer>
            <AppNavigation />
          </UniversalAppContainer>
        </RecoilRoot>
      </PaperProvider>
    </ApolloProvider>
  );
};