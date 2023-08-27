import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { IP_ADDRESS } from '@env';

export const client = new ApolloClient({
    //Switch between http://localhost:4000 and http://192.168.4.56:4000
    //Eric uses http://192.168.41.41:4000
    //please configure your own IP address in .env file
    //run yarn start --clear in client after changing uri in .env file
    uri: IP_ADDRESS,
    cache: new InMemoryCache(),
});