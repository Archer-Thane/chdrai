import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "questionText";

export const QuestionTitle = (record: TQuestion): string => {
  return record.questionText || record.id;
};
