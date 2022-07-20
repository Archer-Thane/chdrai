import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHILD_TITLE_FIELD } from "./ChildTitle";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const ChildShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="nationality" source="nationality" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="smsCode" source="smsCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Answer" target="ChildId" label="Answers">
          <Datagrid rowClick="show">
            <ReferenceField label="childId" source="child.id" reference="Child">
              <TextField source={CHILD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="questionId"
              source="question.id"
              reference="Question"
            >
              <TextField source={QUESTION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="surveyId"
              source="survey.id"
              reference="Survey"
            >
              <TextField source={SURVEY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Drawing"
          target="ChildId"
          label="Drawings"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="childId" source="child.id" reference="Child">
              <TextField source={CHILD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="fileAddress" source="fileAddress" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
