import { Module } from "@nestjs/common";
import { ChoiceModuleBase } from "./base/choice.module.base";
import { ChoiceService } from "./choice.service";
import { ChoiceController } from "./choice.controller";
import { ChoiceResolver } from "./choice.resolver";

@Module({
  imports: [ChoiceModuleBase],
  controllers: [ChoiceController],
  providers: [ChoiceService, ChoiceResolver],
  exports: [ChoiceService],
})
export class ChoiceModule {}
