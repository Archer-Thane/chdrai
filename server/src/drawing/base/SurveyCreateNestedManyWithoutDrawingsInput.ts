/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class SurveyCreateNestedManyWithoutDrawingsInput {
  @Field(() => [SurveyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SurveyWhereUniqueInput],
  })
  connect?: Array<SurveyWhereUniqueInput>;
}
export { SurveyCreateNestedManyWithoutDrawingsInput };
