import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AnswerTitle } from "../answer/AnswerTitle";
import { DrawingTitle } from "../drawing/DrawingTitle";

export const ChildEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <ReferenceArrayInput
          source="answers"
          reference="Answer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="drawings"
          reference="Drawing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DrawingTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="gender"
          label="gender"
          choices={[
            { label: "male", value: "Male" },
            { label: "female", value: "Female" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="nationality"
          label="nationality"
          choices={[
            { label: "persian", value: "Persian" },
            { label: "norwegian", value: "Norwegian" },
            { label: "indian", value: "Indian" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="smsCode" source="smsCode" />
      </SimpleForm>
    </Edit>
  );
};
