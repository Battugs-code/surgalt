const UserClassSchema = `
type UserClass {
  id      String
  userId  String
  classId String

  user  User
  class Class

}
`;

const ClassQueries = `
    getAllClass: [Class]
    getMyClass(ownerId: String!): [Class]
    getClassByName(name: String!): [Class]
`;

const ClassMutations = `
    createClass(ownerId: String!, name: String!, profilePicture: String!, description: String!): Class
    updateClass(id: String!, ownerId: String!, name: String!, profilePicture: String!, description: String!): Class
    deleteClass(id: String!): Class
`;
