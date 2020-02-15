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

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
