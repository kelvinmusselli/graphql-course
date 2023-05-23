const user = async (_, { id }, { getUsers }) => {
  // quando for fazer o get com id, é necessário fazer desta forma
  const response = await getUsers(`/${id}`);
  const user = await response.json();
  return user;
};

const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const users = await getUsers('/?' + apiFiltersInput);
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
