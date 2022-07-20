import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DrawingService } from "./drawing.service";
import { DrawingControllerBase } from "./base/drawing.controller.base";

@swagger.ApiTags("drawings")
@common.Controller("drawings")
export class DrawingController extends DrawingControllerBase {
  constructor(
    protected readonly service: DrawingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
