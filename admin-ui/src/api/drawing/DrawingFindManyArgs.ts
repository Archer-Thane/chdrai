import { DrawingWhereInput } from "./DrawingWhereInput";
import { DrawingOrderByInput } from "./DrawingOrderByInput";

export type DrawingFindManyArgs = {
  where?: DrawingWhereInput;
  orderBy?: Array<DrawingOrderByInput>;
  skip?: number;
  take?: number;
};
