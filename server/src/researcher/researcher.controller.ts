import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResearcherService } from "./researcher.service";
import { ResearcherControllerBase } from "./base/researcher.controller.base";

@swagger.ApiTags("researchers")
@common.Controller("researchers")
export class ResearcherController extends ResearcherControllerBase {
  constructor(
    protected readonly service: ResearcherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
