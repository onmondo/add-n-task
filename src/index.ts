import { nAddOnePerDigit, nGenerateRandomInt } from './addNTask.util';

(async () => {
  try {
    const randomNumber = await nGenerateRandomInt(1000, 10000);
    console.log(randomNumber);

    const randomNumberAddOne = nAddOnePerDigit(randomNumber, 1);
    console.log(randomNumberAddOne);
  } catch (err) {
    console.error('Error generating random number:', err);
  }
})();
