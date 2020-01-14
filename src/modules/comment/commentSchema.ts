import { gql } from 'apollo-server';

const commentSchema = gql`
  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`;

export { commentSchema };
