import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SurveyListRelationFilter } from "../survey/SurveyListRelationFilter";

export type ResearcherWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  surveys?: SurveyListRelationFilter;
};
