import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import MainRecipes from './pages/MainRecipes';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/recipes" component={MainRecipes} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
