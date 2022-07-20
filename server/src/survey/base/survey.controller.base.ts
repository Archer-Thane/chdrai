/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SurveyService } from "../survey.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SurveyCreateInput } from "./SurveyCreateInput";
import { SurveyWhereInput } from "./SurveyWhereInput";
import { SurveyWhereUniqueInput } from "./SurveyWhereUniqueInput";
import { SurveyFindManyArgs } from "./SurveyFindManyArgs";
import { SurveyUpdateInput } from "./SurveyUpdateInput";
import { Survey } from "./Survey";
import { AnswerFindManyArgs } from "../../answer/base/AnswerFindManyArgs";
import { Answer } from "../../answer/base/Answer";
import { AnswerWhereUniqueInput } from "../../answer/base/AnswerWhereUniqueInput";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SurveyControllerBase {
  constructor(
    protected readonly service: SurveyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Survey })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: SurveyCreateInput): Promise<Survey> {
    return await this.service.create({
      data: {
        ...data,

        drawingId: data.drawingId
          ? {
              connect: data.drawingId,
            }
          : undefined,

        researcherId: data.researcherId
          ? {
              connect: data.researcherId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,

        drawingId: {
          select: {
            id: true,
          },
        },

        id: true,
        numOfQuestions: true,

        researcherId: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Survey] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SurveyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Survey[]> {
    const args = plainToClass(SurveyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,

        drawingId: {
          select: {
            id: true,
          },
        },

        id: true,
        numOfQuestions: true,

        researcherId: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Survey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SurveyWhereUniqueInput
  ): Promise<Survey | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,

        drawingId: {
          select: {
            id: true,
          },
        },

        id: true,
        numOfQuestions: true,

        researcherId: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Survey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SurveyWhereUniqueInput,
    @common.Body() data: SurveyUpdateInput
  ): Promise<Survey | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          drawingId: data.drawingId
            ? {
                connect: data.drawingId,
              }
            : undefined,

          researcherId: data.researcherId
            ? {
                connect: data.researcherId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,

          drawingId: {
            select: {
              id: true,
            },
          },

          id: true,
          numOfQuestions: true,

          researcherId: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Survey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SurveyWhereUniqueInput
  ): Promise<Survey | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,

          drawingId: {
            select: {
              id: true,
            },
          },

          id: true,
          numOfQuestions: true,

          researcherId: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/answers")
  @ApiNestedQuery(AnswerFindManyArgs)
  async findManyAnswers(
    @common.Req() request: Request,
    @common.Param() params: SurveyWhereUniqueInput
  ): Promise<Answer[]> {
    const query = plainToClass(AnswerFindManyArgs, request.query);
    const results = await this.service.findAnswers(params.id, {
      ...query,
      select: {
        childId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        questionId: {
          select: {
            id: true,
          },
        },

        surveyId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/answers")
  async connectAnswers(
    @common.Param() params: SurveyWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/answers")
  async updateAnswers(
    @common.Param() params: SurveyWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/answers")
  async disconnectAnswers(
    @common.Param() params: SurveyWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/questions")
  @ApiNestedQuery(QuestionFindManyArgs)
  async findManyQuestions(
    @common.Req() request: Request,
    @common.Param() params: SurveyWhereUniqueInput
  ): Promise<Question[]> {
    const query = plainToClass(QuestionFindManyArgs, request.query);
    const results = await this.service.findQuestions(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        indexInSurvey: true,
        questionText: true,

        surveyId: {
          select: {
            id: true,
          },
        },

        typeOfQuestion: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/questions")
  async connectQuestions(
    @common.Param() params: SurveyWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/questions")
  async updateQuestions(
    @common.Param() params: SurveyWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Survey",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/questions")
  async disconnectQuestions(
    @common.Param() params: SurveyWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
