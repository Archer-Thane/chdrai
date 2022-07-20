import { Module } from "@nestjs/common";
import { DrawingModuleBase } from "./base/drawing.module.base";
import { DrawingService } from "./drawing.service";
import { DrawingController } from "./drawing.controller";
import { DrawingResolver } from "./drawing.resolver";

@Module({
  imports: [DrawingModuleBase],
  controllers: [DrawingController],
  providers: [DrawingService, DrawingResolver],
  exports: [DrawingService],
})
export class DrawingModule {}
