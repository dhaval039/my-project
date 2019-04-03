import { NEW_POST, EDIT_POST, REMOVE_POST } from "./types";

export const createPost = data => {
  return dispatch => {
    dispatch({
      type: NEW_POST,
      payload: data
    });
  };
};
export const editePost = data => {
  return {
    type: EDIT_POST,
    payload: data
  };
};
export const removePost = data => {
  return {
    type: REMOVE_POST,
    payload: data
  };
};
