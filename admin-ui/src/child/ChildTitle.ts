import { Child as TChild } from "../api/child/Child";

export const CHILD_TITLE_FIELD = "phoneNumber";

export const ChildTitle = (record: TChild): string => {
  return record.phoneNumber || record.id;
};
