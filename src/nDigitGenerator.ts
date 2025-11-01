import crypto from 'crypto';

export function nGenerateRandomInt(min: number, max: number) {
  return new Promise((resolve, reject) => {
    crypto.randomInt(min, max, (err: any, num: number) => {
      if (err) reject(err);
      else resolve(num);
    });
  });
};
