import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://192.168.23.1:4000/',
    cache: new InMemoryCache(),
});