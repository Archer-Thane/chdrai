import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHILD_TITLE_FIELD } from "../child/ChildTitle";
import { QUESTION_TITLE_FIELD } from "./QuestionTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const QuestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="indexInSurvey" source="indexInSurvey" />
        <TextField label="questionText" source="questionText" />
        <ReferenceField label="surveyId" source="survey.id" reference="Survey">
          <TextField source={SURVEY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="typeOfQuestion" source="typeOfQuestion" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Answer"
          target="QuestionId"
          label="Answers"
        >
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
          reference="Choice"
          target="QuestionId"
          label="Choices"
        >
          <Datagrid rowClick="show">
            <TextField label="choiceText" source="choiceText" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="questionId"
              source="question.id"
              reference="Question"
            >
              <TextField source={QUESTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
