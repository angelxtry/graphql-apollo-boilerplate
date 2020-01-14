import { comments, users, posts } from '../../fakeData';

const commentResolvers = {
  Query: {
    comment: (_: any, args: any) =>
      comments.find((comment) => comment.id === args.id),
    comments: () => comments,
  },
  Comment: {
    author: (comment: any) => users.find((user) => user.id === comment.author),
    post: (comment: any) => posts.find((post) => post.id === comment.post),
  },
};

export { commentResolvers };
