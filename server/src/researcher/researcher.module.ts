import { Module } from "@nestjs/common";
import { ResearcherModuleBase } from "./base/researcher.module.base";
import { ResearcherService } from "./researcher.service";
import { ResearcherController } from "./researcher.controller";
import { ResearcherResolver } from "./researcher.resolver";

@Module({
  imports: [ResearcherModuleBase],
  controllers: [ResearcherController],
  providers: [ResearcherService, ResearcherResolver],
  exports: [ResearcherService],
})
export class ResearcherModule {}
