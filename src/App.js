import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarReceitas from './pages/ExplorarBebidas';
import MainRecipes from './pages/MainRecipes';
import Profile from './pages/Profile';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/explorar" component={Explorar} />
          <Route path="/explorar/bebidas" component={ExplorarReceitas}  />
          <Route path="/receitas/comida/:id" component={Profile} />
          <Route path="/receitas/bebida/:id" component={Profile} />
          <Route path="/receitas" component={MainRecipes} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
