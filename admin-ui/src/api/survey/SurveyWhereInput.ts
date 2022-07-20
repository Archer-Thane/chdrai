import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { ResearcherWhereUniqueInput } from "../researcher/ResearcherWhereUniqueInput";

export type SurveyWhereInput = {
  answers?: AnswerListRelationFilter;
  description?: StringNullableFilter;
  drawingId?: DrawingWhereUniqueInput;
  id?: StringFilter;
  numOfQuestions?: IntFilter;
  questions?: QuestionListRelationFilter;
  researcherId?: ResearcherWhereUniqueInput;
  title?: StringFilter;
};
