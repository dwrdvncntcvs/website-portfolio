const accessLink = (path = "", user) => {
  return user ? `/admin${path}` : path;
};

export { accessLink };
