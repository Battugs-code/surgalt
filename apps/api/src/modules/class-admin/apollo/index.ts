import { postSchema, PostQueries, PostMutations } from './schema/post';
import { userSchema, UserQueries, UserMutations } from './schema/user';
import { classSchema, ClassQueries, ClassMutations } from './schema/class';

import { ApolloServer } from '@apollo/server';

export const classAdminApolloServer = new ApolloServer({
  typeDefs: `
    scalar Date
    ${postSchema}
    ${userSchema}
    ${classSchema}

    type Query {
      ${PostQueries}
      ${UserQueries}
      ${ClassQueries}
    }
    
    type Mutation {
      ${PostMutations}
      ${UserMutations}
      ${ClassMutations}
    }
  `,

  resolvers: {
    Query: {},

    Mutation: {},
  },
});
