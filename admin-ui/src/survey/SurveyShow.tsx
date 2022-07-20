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
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";
import { SURVEY_TITLE_FIELD } from "./SurveyTitle";
import { DRAWING_TITLE_FIELD } from "../drawing/DrawingTitle";
import { RESEARCHER_TITLE_FIELD } from "../researcher/ResearcherTitle";

export const SurveyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Answer"
          target="SurveyId"
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
          reference="Question"
          target="SurveyId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="indexInSurvey" source="indexInSurvey" />
            <TextField label="questionText" source="questionText" />
            <ReferenceField
              label="surveyId"
              source="survey.id"
              reference="Survey"
            >
              <TextField source={SURVEY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="typeOfQuestion" source="typeOfQuestion" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
