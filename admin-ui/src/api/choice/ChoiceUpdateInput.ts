import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ChoiceUpdateInput = {
  choiceText?: string;
  questionId?: QuestionWhereUniqueInput;
};
