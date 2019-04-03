import { FEES_POST } from "../../Actions/types";
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FEES_POST:
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}
