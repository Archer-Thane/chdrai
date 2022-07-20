import { Choice as TChoice } from "../api/choice/Choice";

export const CHOICE_TITLE_FIELD = "choiceText";

export const ChoiceTitle = (record: TChoice): string => {
  return record.choiceText || record.id;
};
