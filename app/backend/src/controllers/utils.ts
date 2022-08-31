const throwTwoEqualTeams = (message: string) => {
  const error = new Error(message);
  error.name = 'TwoEqualTeams';
  throw error;
};

export default throwTwoEqualTeams;
