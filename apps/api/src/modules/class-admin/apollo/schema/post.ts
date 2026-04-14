const postSchema = `
type Post {
  _id:        String  
  videoUrl:  String
  thumbnail: String
  pptUrl:    String
  images:    [String]
  title:     String
  content:   String
  author:    String
  createdAt: Date
  updatedAt: Date
  classId:   String
}
`;

const PostQueries = `
    getPosts(classId: String!): [Post]
`;

const PostMutations = `
    createPost(classId: String!, videoUrl: String, thumbnail: String, pptUrl: String, images: [String], title: String, content: String, author: String): Post
    updatePost(classId: String!, videoUrl: String, thumbnail: String, pptUrl: String, images: [String], title: String, content: String, author: String): Post
    deletePost(classId: String!, id: String!): Post
`;

export { postSchema, PostQueries, PostMutations };
