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
import { AnswerListRelationFilter } from "../../answer/base/AnswerListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ChoiceListRelationFilter } from "../../choice/base/ChoiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";
import { EnumQuestionTypeOfQuestion } from "./EnumQuestionTypeOfQuestion";
@InputType()
class QuestionWhereInput {
  @ApiProperty({
    required: false,
    type: () => AnswerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AnswerListRelationFilter)
  @IsOptional()
  @Field(() => AnswerListRelationFilter, {
    nullable: true,
  })
  answers?: AnswerListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ChoiceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ChoiceListRelationFilter)
  @IsOptional()
  @Field(() => ChoiceListRelationFilter, {
    nullable: true,
  })
  choices?: ChoiceListRelationFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  indexInSurvey?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  questionText?: StringFilter;

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
    enum: EnumQuestionTypeOfQuestion,
  })
  @IsEnum(EnumQuestionTypeOfQuestion)
  @IsOptional()
  @Field(() => EnumQuestionTypeOfQuestion, {
    nullable: true,
  })
  typeOfQuestion?:
    | "ShortAnswer"
    | "LongAnswer"
    | "SingleChoice"
    | "MultiChoice";
}
export { QuestionWhereInput };
