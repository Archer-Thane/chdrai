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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class AnswerWhereInput {
  @ApiProperty({
    required: false,
    type: () => ChildWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChildWhereUniqueInput)
  @IsOptional()
  @Field(() => ChildWhereUniqueInput, {
    nullable: true,
  })
  childId?: ChildWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  questionId?: QuestionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SurveyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SurveyWhereUniqueInput)
  @IsOptional()
  @Field(() => SurveyWhereUniqueInput, {
    nullable: true,
  })
  surveyId?: SurveyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  value?: StringNullableFilter;
}
export { AnswerWhereInput };
