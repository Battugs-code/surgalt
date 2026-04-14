const classSchema = `
type Class {
  _id:             String
  ownerId:        String
  name:           String
  profilePicture: String
  description:    String
  createdAt:      Date
  updatedAt:      Date
  inClassUsers:   [User]
  posts:          [Post]
}

    `;

const ClassQueries = `
        getAllClass: [Class]
        getMyClass(ownerId: String!): [Class]
    `;

const ClassMutations = `
        createClass(ownerId: String!, name: String!, profilePicture: String!, description: String!): Class
        updateClass(id: String!, ownerId: String!, name: String!, profilePicture: String!, description: String!): Class
        deleteClass(id: String!): Class
    `;

export { classSchema, ClassQueries, ClassMutations };
