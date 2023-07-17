import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fs from 'fs';
import path from 'path';
import { resolvers } from './resolvers/resolvers.js';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const __dirname = path.resolve(path.dirname(''));
const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.resolve(__dirname, 'schema.graphql')).toString('utf-8'),
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);