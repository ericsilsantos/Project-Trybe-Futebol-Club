const throwTokenInvalid = (message: string) => {
  const error = new Error(message);
  error.name = 'TokenInvalid';
  throw error;
};

export default throwTokenInvalid;
