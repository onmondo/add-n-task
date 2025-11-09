import crypto from 'crypto';

export function nGenerateRandomInt(min: number, max: number): Promise<number> {
  return new Promise((resolve, reject) => {
    crypto.randomInt(min, max, (err: any, num: number) => {
      if (err) reject(err);
      else resolve(num);
    });
  });
};

export function nAddOnePerDigit(num: number, addN: number) {
  return `${num}`.split('').reduce((accumulatedString: string, char: string) => {
    const computedString = `${(Number.parseInt(char) + addN)}`
    const digit = computedString.charAt(computedString.length - 1);
    accumulatedString = accumulatedString + digit;
    return accumulatedString;
  }, '');
}