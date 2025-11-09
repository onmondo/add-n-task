import { NextFunction, Request, Response, Router } from 'express';
import { nGenerateRandomInt, nAddOnePerDigit } from '../util/addNTask.util';

const addNTaskController = Router();

addNTaskController.get('/randomnumber', async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const randomNumber = await nGenerateRandomInt(1000, 10000);
    console.log(randomNumber);
    const randomNumberAddOne = nAddOnePerDigit(randomNumber, 1);
    console.log(randomNumberAddOne);

    // objects are treated as JSON content type
    res.send({
      number: `${randomNumber}`,
      answer: randomNumberAddOne
    });
  } catch (err) {
    const errorMsg = `Error generating random number: ${err}`;
    console.error(errorMsg);
    res.send({
      error: errorMsg
    });
  }
});

export default addNTaskController;
