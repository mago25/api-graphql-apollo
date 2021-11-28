import { ApolloServer } from "apollo-server-express";
import { gqlTypes } from "./gqlTypes.js";
import { gqlResolvers } from "./gqlResolvers.js";

export const gqlServer = new ApolloServer({
    typeDefs: gqlTypes,
    resolvers: gqlResolvers
});