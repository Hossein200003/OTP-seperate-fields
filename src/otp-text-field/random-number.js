const generateCode = () => {
  let random_number = Math.round(Math.random() * 10000);
  while (random_number < 1000) {
    random_number = Math.round(Math.random() * 10000);
  }
//   console.log(random_number);
  return random_number;
};

export {generateCode};