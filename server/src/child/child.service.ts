import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ChildServiceBase } from "./base/child.service.base";

@Injectable()
export class ChildService extends ChildServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
