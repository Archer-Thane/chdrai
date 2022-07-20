import { AnswerUpdateManyWithoutSurveysInput } from "./AnswerUpdateManyWithoutSurveysInput";
import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";
import { QuestionUpdateManyWithoutSurveysInput } from "./QuestionUpdateManyWithoutSurveysInput";
import { ResearcherWhereUniqueInput } from "../researcher/ResearcherWhereUniqueInput";

export type SurveyUpdateInput = {
  answers?: AnswerUpdateManyWithoutSurveysInput;
  description?: string | null;
  drawingId?: DrawingWhereUniqueInput | null;
  numOfQuestions?: number;
  questions?: QuestionUpdateManyWithoutSurveysInput;
  researcherId?: ResearcherWhereUniqueInput | null;
  title?: string;
};
