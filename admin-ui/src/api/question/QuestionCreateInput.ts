import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { ChoiceCreateNestedManyWithoutQuestionsInput } from "./ChoiceCreateNestedManyWithoutQuestionsInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  choices?: ChoiceCreateNestedManyWithoutQuestionsInput;
  indexInSurvey: number;
  questionText: string;
  surveyId: SurveyWhereUniqueInput;
  typeOfQuestion: "ShortAnswer" | "LongAnswer" | "SingleChoice" | "MultiChoice";
};
