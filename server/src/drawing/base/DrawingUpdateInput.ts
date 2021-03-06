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
import { SurveyUpdateManyWithoutDrawingsInput } from "./SurveyUpdateManyWithoutDrawingsInput";
@InputType()
class DrawingUpdateInput {
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
  childId?: ChildWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileAddress?: string | null;

  @ApiProperty({
    required: false,
    type: () => SurveyUpdateManyWithoutDrawingsInput,
  })
  @ValidateNested()
  @Type(() => SurveyUpdateManyWithoutDrawingsInput)
  @IsOptional()
  @Field(() => SurveyUpdateManyWithoutDrawingsInput, {
    nullable: true,
  })
  surveys?: SurveyUpdateManyWithoutDrawingsInput;
}
export { DrawingUpdateInput };
