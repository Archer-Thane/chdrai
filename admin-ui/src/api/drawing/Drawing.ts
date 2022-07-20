import { Child } from "../child/Child";
import { Survey } from "../survey/Survey";

export type Drawing = {
  childId?: Child | null;
  createdAt: Date;
  fileAddress: string | null;
  id: string;
  surveys?: Array<Survey>;
  updatedAt: Date;
};
