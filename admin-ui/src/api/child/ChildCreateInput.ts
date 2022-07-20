import { AnswerCreateNestedManyWithoutChildrenInput } from "./AnswerCreateNestedManyWithoutChildrenInput";
import { DrawingCreateNestedManyWithoutChildrenInput } from "./DrawingCreateNestedManyWithoutChildrenInput";

export type ChildCreateInput = {
  age: number;
  answers?: AnswerCreateNestedManyWithoutChildrenInput;
  drawings?: DrawingCreateNestedManyWithoutChildrenInput;
  gender: "Male" | "Female";
  nationality?: "Persian" | "Norwegian" | "Indian" | null;
  phoneNumber: string;
  smsCode?: string | null;
};
