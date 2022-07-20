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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DrawingWhereUniqueInput } from "../../drawing/base/DrawingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { QuestionListRelationFilter } from "../../question/base/QuestionListRelationFilter";
import { ResearcherWhereUniqueInput } from "../../researcher/base/ResearcherWhereUniqueInput";
@InputType()
class SurveyWhereInput {
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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DrawingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DrawingWhereUniqueInput)
  @IsOptional()
  @Field(() => DrawingWhereUniqueInput, {
    nullable: true,
  })
  drawingId?: DrawingWhereUniqueInput;

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
  numOfQuestions?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => QuestionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestionListRelationFilter)
  @IsOptional()
  @Field(() => QuestionListRelationFilter, {
    nullable: true,
  })
  questions?: QuestionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ResearcherWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResearcherWhereUniqueInput)
  @IsOptional()
  @Field(() => ResearcherWhereUniqueInput, {
    nullable: true,
  })
  researcherId?: ResearcherWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;
}
export { SurveyWhereInput };