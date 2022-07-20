import { ChoiceWhereInput } from "./ChoiceWhereInput";
import { ChoiceOrderByInput } from "./ChoiceOrderByInput";

export type ChoiceFindManyArgs = {
  where?: ChoiceWhereInput;
  orderBy?: Array<ChoiceOrderByInput>;
  skip?: number;
  take?: number;
};
