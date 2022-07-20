import { Answer as TAnswer } from "../api/answer/Answer";

export const ANSWER_TITLE_FIELD = "value";

export const AnswerTitle = (record: TAnswer): string => {
  return record.value || record.id;
};
