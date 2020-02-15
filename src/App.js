import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
<<<<<<< HEAD
import Header from './components/Header';
import './style/App.css';
=======
import MainRecipes from './pages/MainRecipes';
import Profile from './pages/Profile';
>>>>>>> master

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
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
