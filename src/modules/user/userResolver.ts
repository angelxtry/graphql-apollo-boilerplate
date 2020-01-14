import { users, posts, comments } from '../../fakeData';

const userResolver = {
  Query: {
    user: (_: any, args: any) => {
      console.log(args.id);
      return users.find((user) => user.id === args.id);
    },
    users: () => {
      console.log(users);
      return users;
    },
  },
  User: {
    posts: (user: any) => posts.filter((post) => post.author === user.id),
    comments: (user: any) =>
      comments.filter((comment) => comment.author === user.id),
  },
};

export { userResolver };
