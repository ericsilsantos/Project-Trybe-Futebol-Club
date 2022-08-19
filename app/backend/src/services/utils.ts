const throwthrowEmailOrPasswordIncorrect = (message: string) => {
  const error = new Error(message);
  error.name = 'EmailOrPasswordIncorrect';
  throw error;
};

export default throwthrowEmailOrPasswordIncorrect;
