import { Survey } from "../survey/Survey";

export type Researcher = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  surveys?: Array<Survey>;
  updatedAt: Date;
};
