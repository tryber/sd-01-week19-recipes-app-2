import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import Header from './components/Header';
import './style/App.css';
import Explorar from './pages/Explorar';
import ExplorarReceitas from './pages/ExplorarReceitas';
import MainRecipes from './pages/MainRecipes';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/explorar" component={Explorar} />
          <Route path="/explorar" component={ExplorarReceitas} />
          <Route path="/receitas/:bebidacomida/:id" component={RecipeDetails} />
          <Route path="/receitas" component={MainRecipes} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
