const user = async (_, { id }, { fetch }) => {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  const user = await response.json();
  return user;
};

const users = async (_, __, { fetch }) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
