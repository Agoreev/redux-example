import * as actionTypes from "../actions/actionTypes";

const storeResult = (ctr) => {
  return {
    type: actionTypes.STORE,
    payload: ctr,
  };
};

export const store = (ctr) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(storeResult(ctr));
    }, 2000);
  };
};
export const remove = (idx) => {
  return {
    type: actionTypes.REMOVE,
    payload: idx,
  };
};
