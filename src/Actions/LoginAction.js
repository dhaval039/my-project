import { LOGIN_POST } from "../Actions/types";

export const logincreate = data => {
  console.log("action called");
  return dispatch => {
    dispatch({
      type: LOGIN_POST,
      payload: data
    });
  };
};
