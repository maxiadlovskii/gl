import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./constants/routes";

import "./App.css";
import { CardsList } from "./components/CarsList/CardsList";

const App: React.FunctionComponent = () => (
  <div className="App">
    <Switch>
      <Route exact path={routes.cardList} component={CardsList} />
      <Redirect to={routes.cardList} />
    </Switch>
  </div>
);

export default App;
