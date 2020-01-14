import { gql } from 'apollo-server';

const postSchema = gql`
  type Post {
    id: ID!
    title: String!
    author: User!
    comments: [Comment]!
  }
`;

export { postSchema };
