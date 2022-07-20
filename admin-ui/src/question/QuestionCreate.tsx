import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AnswerTitle } from "../answer/AnswerTitle";
import { ChoiceTitle } from "../choice/ChoiceTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const QuestionCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceArrayInput
          source="choices"
          reference="Choice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChoiceTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="indexInSurvey" source="indexInSurvey" />
        <TextInput label="questionText" source="questionText" />
        <ReferenceInput source="survey.id" reference="Survey" label="surveyId">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
        <SelectInput
          source="typeOfQuestion"
          label="typeOfQuestion"
          choices={[
            { label: "short answer", value: "ShortAnswer" },
            { label: "long answer", value: "LongAnswer" },
            { label: "single choice", value: "SingleChoice" },
            { label: "multi choice", value: "MultiChoice" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
