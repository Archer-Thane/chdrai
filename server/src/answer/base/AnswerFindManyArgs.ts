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
import { AnswerWhereInput } from "./AnswerWhereInput";
import { Type } from "class-transformer";
import { AnswerOrderByInput } from "./AnswerOrderByInput";

@ArgsType()
class AnswerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnswerWhereInput,
  })
  @Field(() => AnswerWhereInput, { nullable: true })
  @Type(() => AnswerWhereInput)
  where?: AnswerWhereInput;

  @ApiProperty({
    required: false,
    type: [AnswerOrderByInput],
  })
  @Field(() => [AnswerOrderByInput], { nullable: true })
  @Type(() => AnswerOrderByInput)
  orderBy?: Array<AnswerOrderByInput>;

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

export { AnswerFindManyArgs };
