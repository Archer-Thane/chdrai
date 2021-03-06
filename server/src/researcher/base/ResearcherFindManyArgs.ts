/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResearcherWhereInput } from "./ResearcherWhereInput";
import { Type } from "class-transformer";
import { ResearcherOrderByInput } from "./ResearcherOrderByInput";

@ArgsType()
class ResearcherFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ResearcherWhereInput,
  })
  @Field(() => ResearcherWhereInput, { nullable: true })
  @Type(() => ResearcherWhereInput)
  where?: ResearcherWhereInput;

  @ApiProperty({
    required: false,
    type: [ResearcherOrderByInput],
  })
  @Field(() => [ResearcherOrderByInput], { nullable: true })
  @Type(() => ResearcherOrderByInput)
  orderBy?: Array<ResearcherOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ResearcherFindManyArgs };
