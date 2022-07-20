import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { ChoiceUpdateManyWithoutQuestionsInput } from "./ChoiceUpdateManyWithoutQuestionsInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  choices?: ChoiceUpdateManyWithoutQuestionsInput;
  indexInSurvey?: number;
  questionText?: string;
  surveyId?: SurveyWhereUniqueInput;
  typeOfQuestion?:
    | "ShortAnswer"
    | "LongAnswer"
    | "SingleChoice"
    | "MultiChoice";
};
