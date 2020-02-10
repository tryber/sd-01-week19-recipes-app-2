import React from 'react';
import AppProvider from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
        <Header />
    </AppProvider>
  );
}

export default App;
