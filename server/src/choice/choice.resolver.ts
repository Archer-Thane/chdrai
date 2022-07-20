import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ChoiceResolverBase } from "./base/choice.resolver.base";
import { Choice } from "./base/Choice";
import { ChoiceService } from "./choice.service";

@graphql.Resolver(() => Choice)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ChoiceResolver extends ChoiceResolverBase {
  constructor(
    protected readonly service: ChoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
