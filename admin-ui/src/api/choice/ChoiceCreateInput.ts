import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ChoiceCreateInput = {
  choiceText: string;
  questionId: QuestionWhereUniqueInput;
};
