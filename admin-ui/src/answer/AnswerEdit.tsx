import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChildTitle } from "../child/ChildTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const AnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="child.id" reference="Child" label="childId">
          <SelectInput optionText={ChildTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="questionId"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <ReferenceInput source="survey.id" reference="Survey" label="surveyId">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
