import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type AnswerUpdateInput = {
  childId?: ChildWhereUniqueInput;
  questionId?: QuestionWhereUniqueInput | null;
  surveyId?: SurveyWhereUniqueInput;
  value?: string | null;
};
