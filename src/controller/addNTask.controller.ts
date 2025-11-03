import { Request, Response, Router } from 'express';
import { nGenerateRandomInt, nAddOnePerDigit } from '../util/addNTask.util';

const addNTaskController = Router();

addNTaskController.get('/randomnumber', async (req: Request, res: Response) => {
  try {
    const randomNumber = await nGenerateRandomInt(1000, 10000);
    console.log(randomNumber);
    const randomNumberAddOne = nAddOnePerDigit(randomNumber, 1);
    console.log(randomNumberAddOne);

    res.send({
      randomNumber,
      randomNumberAddOne
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
