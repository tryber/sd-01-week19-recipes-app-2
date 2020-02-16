import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import Explorer from './pages/Explorer';
import ExplorarComidas from './pages/Explorar-comidas';
import ExplorarBebidas from './pages/Explorar-bebidas';


function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/explorer" component={Explorer} />
          <Route path="/explorer" component={ExplorarComidas} />
          <Route path="/explorer" component={ExplorarBebidas} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
