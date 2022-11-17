import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  title: undefined,
  date: undefined,
  options: {
    adults: undefined,
    children: undefined,
    rating: undefined,
    genre: undefined,
    type: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        title: state.title,
        startDate: state.startDate,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
