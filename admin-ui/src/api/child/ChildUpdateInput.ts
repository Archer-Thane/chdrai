import { AnswerUpdateManyWithoutChildrenInput } from "./AnswerUpdateManyWithoutChildrenInput";
import { DrawingUpdateManyWithoutChildrenInput } from "./DrawingUpdateManyWithoutChildrenInput";

export type ChildUpdateInput = {
  age?: number;
  answers?: AnswerUpdateManyWithoutChildrenInput;
  drawings?: DrawingUpdateManyWithoutChildrenInput;
  gender?: "Male" | "Female";
  nationality?: "Persian" | "Norwegian" | "Indian" | null;
  phoneNumber?: string;
  smsCode?: string | null;
};
