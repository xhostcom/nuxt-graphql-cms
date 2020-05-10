
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const makeExecutableSchema = require ('graphql-tools');
const graphqlHTTP = require('express-graphql');
const newSchema = require('./schema.graphql');
const typeDefs = newSchema;
const resolvers = {};
const middleware = new graphqlHTTP();
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

const server = new ApolloServer({
  schema: schema
});


server.applyMiddleware({ app, middleware });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);


