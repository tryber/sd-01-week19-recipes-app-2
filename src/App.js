import React from 'react';
import AppProvider from './context/AppContext';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div id="meals">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
