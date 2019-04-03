import { FEES_POST } from "../Actions/types";

export const feesData = data => {
  return dispatch => {
    dispatch({
      type: FEES_POST,
      payload: data
    });
  };
};
