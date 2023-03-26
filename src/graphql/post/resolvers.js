const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(`/${id}`);
  const user = await response.json();
  return user;
};

const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
