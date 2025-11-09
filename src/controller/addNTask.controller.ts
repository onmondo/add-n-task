import { NextFunction, Request, Response, Router } from 'express';
import { nGenerateRandomInt, nAddOnePerDigit } from '../util/addNTask.util';
import { AddNTaskService } from '../service/addNTask.service';
import { AddNTaskRepository } from '../repository/addNTask.repository';

const addNTaskController = Router();

const service = new AddNTaskService(new AddNTaskRepository());

addNTaskController.get('/randomnumber', async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const result = await service.GetRandomNumber();

    // objects are treated as JSON content type
    res.send(result);
  } catch (err) {
    const errorMsg = `Error generating random number: \n${err}`;
    console.error(errorMsg);
    res.status(500).send({
      error: errorMsg
    });
  }
});

export default addNTaskController;
