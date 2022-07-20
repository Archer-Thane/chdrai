import { SortOrder } from "../../util/SortOrder";

export type SurveyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  drawingIdId?: SortOrder;
  id?: SortOrder;
  numOfQuestions?: SortOrder;
  researcherIdId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
