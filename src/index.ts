import { ApolloServer } from 'apollo-server';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import schema1 from './schemas';

const options = {
  port: 9999,
  playground: '/playground',
};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: schema1,
  resolvers,
});

const server = new ApolloServer({ schema });

server.listen(options, () => {
  console.log('Server start.');
});
