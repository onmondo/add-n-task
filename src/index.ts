import { nGenerateRandomInt } from "./nDigitGenerator";

(async () => {
  try {
    const randomNumber = await nGenerateRandomInt(1000, 10000);
    console.log(randomNumber);
  } catch (err) {
    console.error('Error generating random number:', err);
  }
})();
