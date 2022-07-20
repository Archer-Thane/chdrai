import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ChildList } from "./child/ChildList";
import { ChildCreate } from "./child/ChildCreate";
import { ChildEdit } from "./child/ChildEdit";
import { ChildShow } from "./child/ChildShow";
import { DrawingList } from "./drawing/DrawingList";
import { DrawingCreate } from "./drawing/DrawingCreate";
import { DrawingEdit } from "./drawing/DrawingEdit";
import { DrawingShow } from "./drawing/DrawingShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { SurveyList } from "./survey/SurveyList";
import { SurveyCreate } from "./survey/SurveyCreate";
import { SurveyEdit } from "./survey/SurveyEdit";
import { SurveyShow } from "./survey/SurveyShow";
import { ResearcherList } from "./researcher/ResearcherList";
import { ResearcherCreate } from "./researcher/ResearcherCreate";
import { ResearcherEdit } from "./researcher/ResearcherEdit";
import { ResearcherShow } from "./researcher/ResearcherShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { ChoiceList } from "./choice/ChoiceList";
import { ChoiceCreate } from "./choice/ChoiceCreate";
import { ChoiceEdit } from "./choice/ChoiceEdit";
import { ChoiceShow } from "./choice/ChoiceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"chdrai"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Child"
          list={ChildList}
          edit={ChildEdit}
          create={ChildCreate}
          show={ChildShow}
        />
        <Resource
          name="Drawing"
          list={DrawingList}
          edit={DrawingEdit}
          create={DrawingCreate}
          show={DrawingShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="Survey"
          list={SurveyList}
          edit={SurveyEdit}
          create={SurveyCreate}
          show={SurveyShow}
        />
        <Resource
          name="Researcher"
          list={ResearcherList}
          edit={ResearcherEdit}
          create={ResearcherCreate}
          show={ResearcherShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="Choice"
          list={ChoiceList}
          edit={ChoiceEdit}
          create={ChoiceCreate}
          show={ChoiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
