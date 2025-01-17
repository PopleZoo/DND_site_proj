export type Database = {
  users: {
    id: string;
    email: string;
    // Add other user fields as necessary
  };
  posts: {
    id: string;
    title: string;
    content: string;
    userId: string;
  };
  // Add other tables and their structures as necessary
};
