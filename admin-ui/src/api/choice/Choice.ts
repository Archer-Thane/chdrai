import { Question } from "../question/Question";

export type Choice = {
  choiceText: string;
  createdAt: Date;
  id: string;
  questionId?: Question;
  updatedAt: Date;
};
