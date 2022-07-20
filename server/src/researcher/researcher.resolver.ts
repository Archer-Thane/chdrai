import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ResearcherResolverBase } from "./base/researcher.resolver.base";
import { Researcher } from "./base/Researcher";
import { ResearcherService } from "./researcher.service";

@graphql.Resolver(() => Researcher)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ResearcherResolver extends ResearcherResolverBase {
  constructor(
    protected readonly service: ResearcherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
