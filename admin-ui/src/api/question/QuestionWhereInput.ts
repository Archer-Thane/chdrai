import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { ChoiceListRelationFilter } from "../choice/ChoiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type QuestionWhereInput = {
  answers?: AnswerListRelationFilter;
  choices?: ChoiceListRelationFilter;
  id?: StringFilter;
  indexInSurvey?: IntFilter;
  questionText?: StringFilter;
  surveyId?: SurveyWhereUniqueInput;
  typeOfQuestion?:
    | "ShortAnswer"
    | "LongAnswer"
    | "SingleChoice"
    | "MultiChoice";
};
