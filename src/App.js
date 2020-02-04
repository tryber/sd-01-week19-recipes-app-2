import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../pages/Login';

function App() {
  return (
    <Route>
      <Switch>
        <Router path="/login" component={<Login />} />
      </Switch>
    </Route>
  );
}

export default App;
