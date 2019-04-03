import { DEPARTMENT_POST } from "../Actions/types";

export const departmentData = data => {
  return dispatch => {
    dispatch({
      type: DEPARTMENT_POST,
      payload: data
    });
  };
};
