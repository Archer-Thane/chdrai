import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChoiceService } from "./choice.service";
import { ChoiceControllerBase } from "./base/choice.controller.base";

@swagger.ApiTags("choices")
@common.Controller("choices")
export class ChoiceController extends ChoiceControllerBase {
  constructor(
    protected readonly service: ChoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
