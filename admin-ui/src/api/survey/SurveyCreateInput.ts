import { AnswerCreateNestedManyWithoutSurveysInput } from "./AnswerCreateNestedManyWithoutSurveysInput";
import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";
import { QuestionCreateNestedManyWithoutSurveysInput } from "./QuestionCreateNestedManyWithoutSurveysInput";
import { ResearcherWhereUniqueInput } from "../researcher/ResearcherWhereUniqueInput";

export type SurveyCreateInput = {
  answers?: AnswerCreateNestedManyWithoutSurveysInput;
  description?: string | null;
  drawingId?: DrawingWhereUniqueInput | null;
  numOfQuestions: number;
  questions?: QuestionCreateNestedManyWithoutSurveysInput;
  researcherId?: ResearcherWhereUniqueInput | null;
  title: string;
};
