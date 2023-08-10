import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

export const client = new ApolloClient({
    //Switch between http://localhost:4000 and http://192.168.4.56:4000
    uri: 'http://192.168.4.56:4000',
    cache: new InMemoryCache(),
});