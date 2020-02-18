import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AppProvider from './context/AppContext';
import Header from './components/Header';
import './style/App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
      </Router>
    </AppProvider>
  );
}

export default App;
