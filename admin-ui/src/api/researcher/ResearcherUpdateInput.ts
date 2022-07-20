import { SurveyUpdateManyWithoutResearchersInput } from "./SurveyUpdateManyWithoutResearchersInput";

export type ResearcherUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  surveys?: SurveyUpdateManyWithoutResearchersInput;
};
