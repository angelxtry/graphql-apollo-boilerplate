import { ApolloServer, gql } from 'apollo-server';
import { users, posts, reviews } from './fakeData';

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Post {
    id: String!
    title: String!
    author: User!
  }

  type Review {
    id: Int!
    text: String!
    author: User!
    post: [Post]!
  }

  type Query {
    user(id: Int!): User!
    users: [User]!
    post(id: Int!): Post!
    posts: [Post]!
    reviews: [Review]!
  }

  type Mutation {
    createUser(name: String!, email: String, age: Int!): User!
  }
`;

const resolvers = {
  Query: {
    user: (_: any, args: any) => users.find((user) => user.id === args.id),
    users: () => {
      console.log(users);
      return users;
    },
    post: (_: any, args: any) => posts.find((post) => post.id === args.id),
    posts: () => posts,
    reviews: () => reviews,
  },
  Post: {
    author: (parent: any) => {
      console.log('Parent: ', parent);
      console.log('Author id: ', parent.author);
      return users.find((user) => user.id === parent.author);
    },
  },
};

const options = {
  port: 9999,
  playground: '/playground',
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(options, () => {
  console.log('Server start.');
});
