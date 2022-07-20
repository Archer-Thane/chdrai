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
import { CreateChildArgs } from "./CreateChildArgs";
import { UpdateChildArgs } from "./UpdateChildArgs";
import { DeleteChildArgs } from "./DeleteChildArgs";
import { ChildFindManyArgs } from "./ChildFindManyArgs";
import { ChildFindUniqueArgs } from "./ChildFindUniqueArgs";
import { Child } from "./Child";
import { AnswerFindManyArgs } from "../../answer/base/AnswerFindManyArgs";
import { Answer } from "../../answer/base/Answer";
import { DrawingFindManyArgs } from "../../drawing/base/DrawingFindManyArgs";
import { Drawing } from "../../drawing/base/Drawing";
import { ChildService } from "../child.service";

@graphql.Resolver(() => Child)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ChildResolverBase {
  constructor(
    protected readonly service: ChildService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "any",
  })
  async _childrenMeta(
    @graphql.Args() args: ChildFindManyArgs
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
  @graphql.Query(() => [Child])
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "any",
  })
  async children(@graphql.Args() args: ChildFindManyArgs): Promise<Child[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Child, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "own",
  })
  async child(
    @graphql.Args() args: ChildFindUniqueArgs
  ): Promise<Child | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Child)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "create",
    possession: "any",
  })
  async createChild(@graphql.Args() args: CreateChildArgs): Promise<Child> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Child)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "update",
    possession: "any",
  })
  async updateChild(
    @graphql.Args() args: UpdateChildArgs
  ): Promise<Child | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Child)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "delete",
    possession: "any",
  })
  async deleteChild(
    @graphql.Args() args: DeleteChildArgs
  ): Promise<Child | null> {
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
  @graphql.ResolveField(() => [Answer])
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "read",
    possession: "any",
  })
  async answers(
    @graphql.Parent() parent: Child,
    @graphql.Args() args: AnswerFindManyArgs
  ): Promise<Answer[]> {
    const results = await this.service.findAnswers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Drawing])
  @nestAccessControl.UseRoles({
    resource: "Drawing",
    action: "read",
    possession: "any",
  })
  async drawings(
    @graphql.Parent() parent: Child,
    @graphql.Args() args: DrawingFindManyArgs
  ): Promise<Drawing[]> {
    const results = await this.service.findDrawings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}