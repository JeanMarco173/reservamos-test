import { createContext, useReducer, useContext } from "react";

import citiesReducer, { initialStore } from "./CitiesReducer.js";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [store, dispatch] = useReducer(citiesReducer, initialStore);
  return (
    <CitiesContext.Provider value={[store, dispatch]}>
      {children}
    </CitiesContext.Provider>
  );
};

const useStore = () => useContext(CitiesContext)[0];
const useDispatch = () => useContext(CitiesContext)[1];

export { CitiesContext, useStore, useDispatch };
export default CitiesProvider;
