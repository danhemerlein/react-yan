import React, { createContext, useContext } from 'react';

const OverrideContext = createContext({});

export const useOverrideContext = () => {
  const context = useContext(OverrideContext);
  return context;
};

export const OverrideProvider = ({ children, overrides }) => {
  return (
    <OverrideContext.Provider value={overrides}>
      {children}
    </OverrideContext.Provider>
  );
};
