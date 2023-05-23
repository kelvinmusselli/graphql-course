/* eslint-disable valid-typeof */
const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(`/${id}`);
  const post = await response.json();

  if (Math.random() > 0.5) {
    return { statusCode: 503, message: 'Timeout' };
  }

  if (typeof post.id === 'undefined') {
    return { statusCode: 404, message: 'Post not found' };
  }

  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await getPosts('/?' + apiFiltersInput);
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    timeStamp: (parent) => {
      // vem o callback de cada request
      console.log(parent);
      return 'hello world';
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== undefined) return 'PostNotFoundError';
      if (typeof obj.timeout !== undefined) return 'PostTimeOutError';
      if (typeof obj.id !== undefined) return 'Post';
      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== undefined) return 'PostNotFoundError';
      if (typeof obj.timeout !== undefined) return 'PostTimeOutError';
      return null;
    },
  },
};

// adicionando alias no query
// query Post {
//   item: post(id: "860") {
//     postId :id
//     title
//     timeStamp
//   }
// }
