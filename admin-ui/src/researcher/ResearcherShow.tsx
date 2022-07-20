import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DRAWING_TITLE_FIELD } from "../drawing/DrawingTitle";
import { RESEARCHER_TITLE_FIELD } from "./ResearcherTitle";

export const ResearcherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="first name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="last name" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Survey"
          target="ResearcherId"
          label="Surveys"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="drawingId"
              source="drawing.id"
              reference="Drawing"
            >
              <TextField source={DRAWING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="numOfQuestions" source="numOfQuestions" />
            <ReferenceField
              label="researcherId"
              source="researcher.id"
              reference="Researcher"
            >
              <TextField source={RESEARCHER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
