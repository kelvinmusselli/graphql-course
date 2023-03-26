const post = () => {
  return {
    id: '1231231',
    title: 'postagem',
  };
};

const posts = () => {
  return [
    {
      id: '1231231',
      title: 'postagem 1',
    },
    {
      id: '44444',
      title: 'postagem 2',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
