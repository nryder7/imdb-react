import React, { useState, useContext, useEffect } from 'react';
import { useFetch } from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('idiocracy');
  const { isError, isLoading, data: movies } = useFetch(`&s=${search}`);

  return (
    <AppContext.Provider
      value={{ search, setSearch, isError, isLoading, movies }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
