import { Survey as TSurvey } from "../api/survey/Survey";

export const SURVEY_TITLE_FIELD = "title";

export const SurveyTitle = (record: TSurvey): string => {
  return record.title || record.id;
};
