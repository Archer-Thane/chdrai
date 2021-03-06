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
import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ChoiceCreateNestedManyWithoutQuestionsInput } from "./ChoiceCreateNestedManyWithoutQuestionsInput";
import { SurveyWhereUniqueInput } from "../../survey/base/SurveyWhereUniqueInput";
import { EnumQuestionTypeOfQuestion } from "./EnumQuestionTypeOfQuestion";
@InputType()
class QuestionCreateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerCreateNestedManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerCreateNestedManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => AnswerCreateNestedManyWithoutQuestionsInput, {
    nullable: true,
  })
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: () => ChoiceCreateNestedManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => ChoiceCreateNestedManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => ChoiceCreateNestedManyWithoutQuestionsInput, {
    nullable: true,
  })
  choices?: ChoiceCreateNestedManyWithoutQuestionsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  indexInSurvey!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  questionText!: string;

  @ApiProperty({
    required: true,
    type: () => SurveyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SurveyWhereUniqueInput)
  @Field(() => SurveyWhereUniqueInput)
  surveyId!: SurveyWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumQuestionTypeOfQuestion,
  })
  @IsEnum(EnumQuestionTypeOfQuestion)
  @Field(() => EnumQuestionTypeOfQuestion)
  typeOfQuestion!:
    | "ShortAnswer"
    | "LongAnswer"
    | "SingleChoice"
    | "MultiChoice";
}
export { QuestionCreateInput };
