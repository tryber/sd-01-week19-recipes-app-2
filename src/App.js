import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import Explorer from './pages/Explorer';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/explorer" component={Explorer} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
