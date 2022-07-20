import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DRAWING_TITLE_FIELD } from "./DrawingTitle";
import { RESEARCHER_TITLE_FIELD } from "../researcher/ResearcherTitle";
import { CHILD_TITLE_FIELD } from "../child/ChildTitle";

export const DrawingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="childId" source="child.id" reference="Child">
          <TextField source={CHILD_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileAddress" source="fileAddress" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Survey"
          target="DrawingId"
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
