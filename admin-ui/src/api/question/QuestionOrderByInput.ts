import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  indexInSurvey?: SortOrder;
  questionText?: SortOrder;
  surveyIdId?: SortOrder;
  typeOfQuestion?: SortOrder;
  updatedAt?: SortOrder;
};
