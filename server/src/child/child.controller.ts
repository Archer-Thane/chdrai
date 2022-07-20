import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChildService } from "./child.service";
import { ChildControllerBase } from "./base/child.controller.base";

@swagger.ApiTags("children")
@common.Controller("children")
export class ChildController extends ChildControllerBase {
  constructor(
    protected readonly service: ChildService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
