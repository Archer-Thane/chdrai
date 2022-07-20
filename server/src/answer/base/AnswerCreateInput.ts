/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChildWhereUniqueInput } from "../../child/base/ChildWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";
@InputType()
class AnswerCreateInput {
  @ApiProperty({
    required: true,
    type: () => ChildWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChildWhereUniqueInput)
  @Field(() => ChildWhereUniqueInput)
  childId!: ChildWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestionWhereUniqueInput, {
    nullable: true,
  })
  questionId?: QuestionWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => SurveyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SurveyWhereUniqueInput)
  @Field(() => SurveyWhereUniqueInput)
  surveyId!: SurveyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  value?: string | null;
}
export { AnswerCreateInput };