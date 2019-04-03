import { ACADEMICINFO_POST } from "../Actions/types";

export const experienceDeta = data => {
  return dispatch => {
    dispatch({
      type: ACADEMICINFO_POST,
      payload: data
    });
  };
};
