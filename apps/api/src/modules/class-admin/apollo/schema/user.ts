const userSchema = `
type User {
  _id       :      String    
  username  :     String    
  displayName:    String
  email       :   String
  phone        :  String
  bio           : String
  role           : String      
}
`;

const UserQueries = `
    getInClassUsers(classId: String!): [User]
`;

const UserMutations = `
    kickUser(classId: String!, userId: String!): User
    inviteUser(classId: String!, userId: String!): User
`;

export { userSchema, UserQueries, UserMutations };
