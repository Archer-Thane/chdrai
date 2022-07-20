import { ResearcherWhereInput } from "./ResearcherWhereInput";
import { ResearcherOrderByInput } from "./ResearcherOrderByInput";

export type ResearcherFindManyArgs = {
  where?: ResearcherWhereInput;
  orderBy?: Array<ResearcherOrderByInput>;
  skip?: number;
  take?: number;
};
