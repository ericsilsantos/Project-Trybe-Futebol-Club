const throwTwoEqualTeams = (message: string) => {
  const error = new Error(message);
  error.name = 'TwoEqualTeams';
  throw error;
};

const throwTeamNotExist = (message: string) => {
  const error = new Error(message);
  error.name = 'TeamNotExist';
  throw error;
};

export { throwTwoEqualTeams, throwTeamNotExist };
