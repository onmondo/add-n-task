import camelcaseKeys from 'camelcase-keys';
import { CreatedNDigitNumber, CreateNDigitNumber } from '../dto/createNDigitNumber';
import DBClient from '../util/DBClient';

export class AddNTaskRepository {
  async createNDigitNumber(createNDigitNumber: CreateNDigitNumber): Promise<CreatedNDigitNumber | null> {
    const dbInstance = DBClient.getInstance();
    const dbClient = await dbInstance.getClient();

    const result = await dbClient.query(
      'INSERT INTO n_digits (digit, correct_answer) VALUES ($1, $2) RETURNING *',
      [createNDigitNumber.digit, createNDigitNumber.correct_answer]
    );

    if (result && result?.rows && result?.rows.length > 0) {
      // select first row of newly inserted record
      return result.rows[0];
    }

    return null;
  }

  async getNDigitNumber(id: number): Promise<CreatedNDigitNumber | null> {
    const dbInstance = DBClient.getInstance();
    const dbClient = await dbInstance.getClient();

    const result = await dbClient.query(
      `SELECT 
        id, 
        digit, 
        correct_answer, 
        timelapse,
        answer,
        date_answered,
        is_answer_correct,
        created_at,
        updated_at,
        deleted_at
      FROM 
        n_digits 
      WHERE id=$1`,
      [id]
    );

    if (result && result?.rows && result?.rows.length > 0) {
      const convertedResult = camelcaseKeys(result.rows, { deep: true })[0];
      return convertedResult as CreatedNDigitNumber;
    }

    return null;
  }
}