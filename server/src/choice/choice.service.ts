import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ChoiceServiceBase } from "./base/choice.service.base";

@Injectable()
export class ChoiceService extends ChoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
