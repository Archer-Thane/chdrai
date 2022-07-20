import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ResearcherServiceBase } from "./base/researcher.service.base";

@Injectable()
export class ResearcherService extends ResearcherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
