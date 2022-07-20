import { Answer } from "../answer/Answer";
import { Drawing } from "../drawing/Drawing";
import { Question } from "../question/Question";
import { Researcher } from "../researcher/Researcher";

export type Survey = {
  answers?: Array<Answer>;
  createdAt: Date;
  description: string | null;
  drawingId?: Drawing | null;
  id: string;
  numOfQuestions: number;
  questions?: Array<Question>;
  researcherId?: Researcher | null;
  title: string;
  updatedAt: Date;
};
