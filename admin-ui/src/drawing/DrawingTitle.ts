import { Drawing as TDrawing } from "../api/drawing/Drawing";

export const DRAWING_TITLE_FIELD = "fileAddress";

export const DrawingTitle = (record: TDrawing): string => {
  return record.fileAddress || record.id;
};
