/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AnswerWhereUniqueInput } from "../../answer/base/AnswerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class AnswerUpdateManyWithoutSurveysInput {
  @Field(() => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  connect?: Array<AnswerWhereUniqueInput>;

  @Field(() => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  disconnect?: Array<AnswerWhereUniqueInput>;

  @Field(() => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnswerWhereUniqueInput],
  })
  set?: Array<AnswerWhereUniqueInput>;
}
export { AnswerUpdateManyWithoutSurveysInput };
