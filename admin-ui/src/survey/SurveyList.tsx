import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DRAWING_TITLE_FIELD } from "../drawing/DrawingTitle";
import { RESEARCHER_TITLE_FIELD } from "../researcher/ResearcherTitle";

export const SurveyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Surveys"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
