import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case actionTypes.STORE:
      return {
        ...state,
        results: [...state.results, state.counter],
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
