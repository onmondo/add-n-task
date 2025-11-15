import { Request } from 'express';
import { CreatedNDigitNumber, CreateNDigitNumber } from '../dto/createNDigitNumber';
import { AddNTaskRepository } from '../repository/addNTask.repository';
import { nAddOnePerDigit, nGenerateRandomInt } from '../util/addNTask.util';

export class AddNTaskService {
  constructor(
    private repository: AddNTaskRepository
  ) {
    this.repository = repository;
  }
  async GetRandomNumber() {
    const randomNumber = await nGenerateRandomInt(1000, 10000);
    const randomNumberAddOne = nAddOnePerDigit(randomNumber, 1);
    const createNDigitNumberDto = new CreateNDigitNumber();
    createNDigitNumberDto.digit = `${randomNumber}`;
    createNDigitNumberDto.correct_answer = randomNumberAddOne;

    const result: unknown = await this.repository.createNDigitNumber(createNDigitNumberDto);

    if (result) {
      const createdNDigitNumber = result as CreatedNDigitNumber;
      console.log(createdNDigitNumber)
      return {
        statusCode: 200,
        message: `Generated ${randomNumberAddOne.length} digit number`,
        data: {
          id: createdNDigitNumber.id,
          digit: /** `${randomNumber}` */ createdNDigitNumber.digit,
          // answer: /** randomNumberAddOne */ result['correct_answer'],
        },
      };
    }

    throw Error('Failed to generate number');
  }

  async GuessNumber(req: Request) {
    console.log(req)
    const { id, answer } = req.body;

    return {
      statusCode: 200,
      message: `Test answer endpoint`,
      data: {
        id,
        answer,
        isCorrect: false,
      }
    }
  }
}