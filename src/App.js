import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import MainRecipes from './pages/MainRecipes';
import Profile from './pages/Profile';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/recipes" component={MainRecipes} />
          <Route path="/comidas" component={MainRecipes} />
          <Route path="/bebidas" component={MainRecipes} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
