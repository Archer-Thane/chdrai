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
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const QuestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Questions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="indexInSurvey" source="indexInSurvey" />
        <TextField label="questionText" source="questionText" />
        <ReferenceField label="surveyId" source="survey.id" reference="Survey">
          <TextField source={SURVEY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="typeOfQuestion" source="typeOfQuestion" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
