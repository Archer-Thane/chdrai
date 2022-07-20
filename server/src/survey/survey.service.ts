import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SurveyServiceBase } from "./base/survey.service.base";

@Injectable()
export class SurveyService extends SurveyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
