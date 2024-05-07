const generateUserCreateResponse = (user) => {
  return {
    name: user.name,
    id: user.id,
    email: user.email,
  };
};

export default generateUserCreateResponse;
