import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { SurveyCreateNestedManyWithoutDrawingsInput } from "./SurveyCreateNestedManyWithoutDrawingsInput";

export type DrawingCreateInput = {
  childId?: ChildWhereUniqueInput | null;
  fileAddress?: string | null;
  surveys?: SurveyCreateNestedManyWithoutDrawingsInput;
};
