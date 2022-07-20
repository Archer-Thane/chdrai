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
import { ChoiceWhereInput } from "./ChoiceWhereInput";
import { Type } from "class-transformer";
import { ChoiceOrderByInput } from "./ChoiceOrderByInput";

@ArgsType()
class ChoiceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChoiceWhereInput,
  })
  @Field(() => ChoiceWhereInput, { nullable: true })
  @Type(() => ChoiceWhereInput)
  where?: ChoiceWhereInput;

  @ApiProperty({
    required: false,
    type: [ChoiceOrderByInput],
  })
  @Field(() => [ChoiceOrderByInput], { nullable: true })
  @Type(() => ChoiceOrderByInput)
  orderBy?: Array<ChoiceOrderByInput>;

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

export { ChoiceFindManyArgs };
