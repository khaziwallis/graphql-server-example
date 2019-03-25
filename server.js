const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers =  require('./resolvers/resolvers');
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/employeedb');

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen({ port: 9000}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});