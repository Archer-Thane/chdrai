import { ChildWhereInput } from "./ChildWhereInput";
import { ChildOrderByInput } from "./ChildOrderByInput";

export type ChildFindManyArgs = {
  where?: ChildWhereInput;
  orderBy?: Array<ChildOrderByInput>;
  skip?: number;
  take?: number;
};
