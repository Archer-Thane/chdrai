import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChildTitle } from "../child/ChildTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const DrawingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="child.id" reference="Child" label="childId">
          <SelectInput optionText={ChildTitle} />
        </ReferenceInput>
        <TextInput label="fileAddress" source="fileAddress" />
        <ReferenceArrayInput
          source="surveys"
          reference="Survey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
