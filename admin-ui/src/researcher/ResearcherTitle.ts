import { Researcher as TResearcher } from "../api/researcher/Researcher";

export const RESEARCHER_TITLE_FIELD = "firstName";

export const ResearcherTitle = (record: TResearcher): string => {
  return record.firstName || record.id;
};
