import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DrawingResolverBase } from "./base/drawing.resolver.base";
import { Drawing } from "./base/Drawing";
import { DrawingService } from "./drawing.service";

@graphql.Resolver(() => Drawing)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DrawingResolver extends DrawingResolverBase {
  constructor(
    protected readonly service: DrawingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
