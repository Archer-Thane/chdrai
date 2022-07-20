import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { SurveyUpdateManyWithoutDrawingsInput } from "./SurveyUpdateManyWithoutDrawingsInput";

export type DrawingUpdateInput = {
  childId?: ChildWhereUniqueInput | null;
  fileAddress?: string | null;
  surveys?: SurveyUpdateManyWithoutDrawingsInput;
};
