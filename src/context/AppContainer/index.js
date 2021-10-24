import React, {createContext, useContext, useReducer} from 'react';
import {
  AuthContainerReducer,
  initializeState,
  initState,
} from './AppContainerReducer';

const AppContext = createContext();

export default function useAppContext() {
  return useContext(AppContext);
}

export function AppContainerProvider({children}) {
  const [state, dispatch] = useReducer(
    AuthContainerReducer,
    initState,
    initializeState,
  );

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}
