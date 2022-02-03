import React, { createContext, useContext } from 'react';

const OverrideContext = createContext({});

export const useOverrideContext = () => {
  return useContext(OverrideContext);
};

export const ReactYanOverrideProvider = ({ children, value }) => {
  return (
    <OverrideContext.Provider value={value}>
      {children}
    </OverrideContext.Provider>
  );
};
