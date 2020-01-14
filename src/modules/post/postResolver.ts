import { users, posts, comments } from '../../fakeData';

const postResolvers = {
  Query: {
    post: (_: any, args: any) => posts.find((post) => post.id === args.id),
    posts: () => posts,
  },
  Post: {
    author: (parent: any) => {
      console.log('Parent: ', parent);
      console.log('Author id: ', parent.author);
      return users.find((user) => user.id === parent.author);
    },
    comments: (post: any) =>
      comments.filter((comment) => comment.post === post.id),
  },
};

export { postResolvers };
