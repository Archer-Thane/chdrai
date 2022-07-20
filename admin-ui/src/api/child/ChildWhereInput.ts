import { IntFilter } from "../../util/IntFilter";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { DrawingListRelationFilter } from "../drawing/DrawingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChildWhereInput = {
  age?: IntFilter;
  answers?: AnswerListRelationFilter;
  drawings?: DrawingListRelationFilter;
  gender?: "Male" | "Female";
  id?: StringFilter;
  nationality?: "Persian" | "Norwegian" | "Indian";
  phoneNumber?: StringFilter;
  smsCode?: StringNullableFilter;
};
