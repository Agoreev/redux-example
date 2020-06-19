import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    case actionTypes.REMOVE:
      const newResults = [
        ...state.results.slice(0, action.payload),
        ...state.results.slice(action.payload + 1),
      ];
      return {
        ...state,
        results: newResults,
      };
  }

  return state;
};

export default reducer;
