import { Child } from "../child/Child";
import { Question } from "../question/Question";
import { Survey } from "../survey/Survey";

export type Answer = {
  childId?: Child;
  createdAt: Date;
  id: string;
  questionId?: Question | null;
  surveyId?: Survey;
  updatedAt: Date;
  value: string | null;
};
