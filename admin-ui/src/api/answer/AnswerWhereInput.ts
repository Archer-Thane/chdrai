import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnswerWhereInput = {
  childId?: ChildWhereUniqueInput;
  id?: StringFilter;
  questionId?: QuestionWhereUniqueInput;
  surveyId?: SurveyWhereUniqueInput;
  value?: StringNullableFilter;
};
