/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Answer } from "../../answer/base/Answer";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Choice } from "../../choice/base/Choice";
import { Survey } from "../../survey/base/Survey";
import { EnumQuestionTypeOfQuestion } from "./EnumQuestionTypeOfQuestion";
@ObjectType()
class Question {
  @ApiProperty({
    required: false,
    type: () => [Answer],
  })
  @ValidateNested()
  @Type(() => Answer)
  @IsOptional()
  answers?: Array<Answer>;

  @ApiProperty({
    required: false,
    type: () => [Choice],
  })
  @ValidateNested()
  @Type(() => Choice)
  @IsOptional()
  choices?: Array<Choice>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
    type: () => Survey,
  })
  @ValidateNested()
  @Type(() => Survey)
  surveyId?: Survey;

  @ApiProperty({
    required: true,
    enum: EnumQuestionTypeOfQuestion,
  })
  @IsEnum(EnumQuestionTypeOfQuestion)
  @Field(() => EnumQuestionTypeOfQuestion, {
    nullable: true,
  })
  typeOfQuestion?:
    | "ShortAnswer"
    | "LongAnswer"
    | "SingleChoice"
    | "MultiChoice";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Question };
