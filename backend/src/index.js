let express;
express = require('express');
const { ApolloServer } = require('apollo-server-express');
const importSchema = require('graphql-import');


// Construct a schema, using GraphQL schema language
const typeDefs = importSchema('./schema.graphql');
// Provide resolver functions for schema fields
const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);


