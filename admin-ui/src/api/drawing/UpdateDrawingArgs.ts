import { DrawingWhereUniqueInput } from "./DrawingWhereUniqueInput";
import { DrawingUpdateInput } from "./DrawingUpdateInput";

export type UpdateDrawingArgs = {
  where: DrawingWhereUniqueInput;
  data: DrawingUpdateInput;
};
