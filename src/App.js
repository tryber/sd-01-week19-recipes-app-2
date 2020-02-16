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
import ExplorarBebidas from './pages/ExplorarBebidas';


function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/explorar" component={Explorar} />
          <Route path="/explorar/comidas">
            <ExplorarComidas />
          </Route>
          <Route exact path="/explorar/bebidas" component={ExplorarBebidas}  />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
