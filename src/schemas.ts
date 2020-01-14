import querySchema from './modules/querySchema';
import { userSchema } from './modules/user';
import { postSchema } from './modules/post';
import { commentSchema } from './modules/comment';

const schemas = [querySchema, userSchema, postSchema, commentSchema];

export default schemas;
