/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Drawing, Survey, Child } from "@prisma/client";

export class DrawingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DrawingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrawingFindManyArgs>
  ): Promise<number> {
    return this.prisma.drawing.count(args);
  }

  async findMany<T extends Prisma.DrawingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrawingFindManyArgs>
  ): Promise<Drawing[]> {
    return this.prisma.drawing.findMany(args);
  }
  async findOne<T extends Prisma.DrawingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrawingFindUniqueArgs>
  ): Promise<Drawing | null> {
    return this.prisma.drawing.findUnique(args);
  }
  async create<T extends Prisma.DrawingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrawingCreateArgs>
  ): Promise<Drawing> {
    return this.prisma.drawing.create<T>(args);
  }
  async update<T extends Prisma.DrawingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrawingUpdateArgs>
  ): Promise<Drawing> {
    return this.prisma.drawing.update<T>(args);
  }
  async delete<T extends Prisma.DrawingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrawingDeleteArgs>
  ): Promise<Drawing> {
    return this.prisma.drawing.delete(args);
  }

  async findSurveys(
    parentId: string,
    args: Prisma.SurveyFindManyArgs
  ): Promise<Survey[]> {
    return this.prisma.drawing
      .findUnique({
        where: { id: parentId },
      })
      .surveys(args);
  }

  async getChildId(parentId: string): Promise<Child | null> {
    return this.prisma.drawing
      .findUnique({
        where: { id: parentId },
      })
      .childId();
  }
}
