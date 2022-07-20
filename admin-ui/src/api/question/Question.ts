import { Answer } from "../answer/Answer";
import { Choice } from "../choice/Choice";
import { Survey } from "../survey/Survey";

export type Question = {
  answers?: Array<Answer>;
  choices?: Array<Choice>;
  createdAt: Date;
  id: string;
  indexInSurvey: number;
  questionText: string;
  surveyId?: Survey;
  typeOfQuestion?:
    | "ShortAnswer"
    | "LongAnswer"
    | "SingleChoice"
    | "MultiChoice";
  updatedAt: Date;
};
