const user = () => {
  return {
    id: '1231231',
    userName: 'Kelvin',
  };
};

const users = () => {
  return [
    {
      id: '1231231',
      userName: 'Kelvin',
    },
    {
      id: '44444',
      userName: 'Tati',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
