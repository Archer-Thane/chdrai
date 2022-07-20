/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateChoiceArgs } from "./CreateChoiceArgs";
import { UpdateChoiceArgs } from "./UpdateChoiceArgs";
import { DeleteChoiceArgs } from "./DeleteChoiceArgs";
import { ChoiceFindManyArgs } from "./ChoiceFindManyArgs";
import { ChoiceFindUniqueArgs } from "./ChoiceFindUniqueArgs";
import { Choice } from "./Choice";
import { Question } from "../../question/base/Question";
import { ChoiceService } from "../choice.service";

@graphql.Resolver(() => Choice)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ChoiceResolverBase {
  constructor(
    protected readonly service: ChoiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "any",
  })
  async _choicesMeta(
    @graphql.Args() args: ChoiceFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Choice])
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "any",
  })
  async choices(@graphql.Args() args: ChoiceFindManyArgs): Promise<Choice[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Choice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "own",
  })
  async choice(
    @graphql.Args() args: ChoiceFindUniqueArgs
  ): Promise<Choice | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Choice)
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "create",
    possession: "any",
  })
  async createChoice(@graphql.Args() args: CreateChoiceArgs): Promise<Choice> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        questionId: {
          connect: args.data.questionId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Choice)
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "update",
    possession: "any",
  })
  async updateChoice(
    @graphql.Args() args: UpdateChoiceArgs
  ): Promise<Choice | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          questionId: {
            connect: args.data.questionId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Choice)
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "delete",
    possession: "any",
  })
  async deleteChoice(
    @graphql.Args() args: DeleteChoiceArgs
  ): Promise<Choice | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Question, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async questionId(@graphql.Parent() parent: Choice): Promise<Question | null> {
    const result = await this.service.getQuestionId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
