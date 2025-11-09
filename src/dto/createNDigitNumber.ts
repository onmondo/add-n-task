
export class CreateNDigitNumber {
  digit!: string;
  correct_answer!: string;
}

export class CreatedNDigitNumber {
  id!: number;
  digit!: string;
  correctAnswer!: string;
  timelapse!: Date;
  answer!: null | string;
  dateAnswered!: null | Date;
  isAnswerCorrect!: boolean;
  createdAt!: Date;
  uppdatedAt!: null;
  deletedAt!: null
}
