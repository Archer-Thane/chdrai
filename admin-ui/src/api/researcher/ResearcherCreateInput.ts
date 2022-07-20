import { SurveyCreateNestedManyWithoutResearchersInput } from "./SurveyCreateNestedManyWithoutResearchersInput";

export type ResearcherCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  surveys?: SurveyCreateNestedManyWithoutResearchersInput;
};
