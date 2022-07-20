import { Answer } from "../answer/Answer";
import { Drawing } from "../drawing/Drawing";

export type Child = {
  age: number;
  answers?: Array<Answer>;
  createdAt: Date;
  drawings?: Array<Drawing>;
  gender?: "Male" | "Female";
  id: string;
  nationality?: "Persian" | "Norwegian" | "Indian" | null;
  phoneNumber: string;
  smsCode: string | null;
  updatedAt: Date;
};
