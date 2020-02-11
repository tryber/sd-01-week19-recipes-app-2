import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import { getRandomRecipes } from './services/APIs';

function App() {
  return (
    <div>
      {console.log(getRandomRecipes('cocktail', 12))}
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </AppProvider>
    </div>
  );
}

export default App;
