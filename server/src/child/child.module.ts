import { Module } from "@nestjs/common";
import { ChildModuleBase } from "./base/child.module.base";
import { ChildService } from "./child.service";
import { ChildController } from "./child.controller";
import { ChildResolver } from "./child.resolver";

@Module({
  imports: [ChildModuleBase],
  controllers: [ChildController],
  providers: [ChildService, ChildResolver],
  exports: [ChildService],
})
export class ChildModule {}
