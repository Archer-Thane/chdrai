import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SurveyListRelationFilter } from "../survey/SurveyListRelationFilter";

export type DrawingWhereInput = {
  childId?: ChildWhereUniqueInput;
  fileAddress?: StringNullableFilter;
  id?: StringFilter;
  surveys?: SurveyListRelationFilter;
};
