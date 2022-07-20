import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { AnswerTitle } from "../answer/AnswerTitle";
import { DrawingTitle } from "../drawing/DrawingTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { ResearcherTitle } from "../researcher/ResearcherTitle";

export const SurveyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="answers"
          reference="Answer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="drawing.id"
          reference="Drawing"
          label="drawingId"
        >
          <SelectInput optionText={DrawingTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="numOfQuestions" source="numOfQuestions" />
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="researcher.id"
          reference="Researcher"
          label="researcherId"
        >
          <SelectInput optionText={ResearcherTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
