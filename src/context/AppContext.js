import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {
  const context = {
    status: {
      user: 'enabled',
      search: 'enabled',
    },
  };
  const [useContext, setContext] = useState(context);
  const { children } = props;

  return (
    <AppContext.Provider value={{ useContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
