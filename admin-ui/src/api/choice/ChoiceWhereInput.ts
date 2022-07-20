import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ChoiceWhereInput = {
  choiceText?: StringFilter;
  id?: StringFilter;
  questionId?: QuestionWhereUniqueInput;
};
