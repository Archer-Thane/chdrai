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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { SurveyUpdateManyWithoutResearchersInput } from "./SurveyUpdateManyWithoutResearchersInput";
import { Type } from "class-transformer";
@InputType()
class ResearcherUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => SurveyUpdateManyWithoutResearchersInput,
  })
  @ValidateNested()
  @Type(() => SurveyUpdateManyWithoutResearchersInput)
  @IsOptional()
  @Field(() => SurveyUpdateManyWithoutResearchersInput, {
    nullable: true,
  })
  surveys?: SurveyUpdateManyWithoutResearchersInput;
}
export { ResearcherUpdateInput };
