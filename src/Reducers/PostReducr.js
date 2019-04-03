import { NEW_POST, EDIT_POST, REMOVE_POST } from "../Actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
      return [...state, action.payload];
    case EDIT_POST:
      state.splice(action.payload.index, 1, action.payload);
      return [...state];
    case REMOVE_POST:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
}
