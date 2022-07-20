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
import { IsString, ValidateNested } from "class-validator";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class ChoiceCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  choiceText!: string;

  @ApiProperty({
    required: true,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  @Field(() => QuestionWhereUniqueInput)
  questionId!: QuestionWhereUniqueInput;
}
export { ChoiceCreateInput };
