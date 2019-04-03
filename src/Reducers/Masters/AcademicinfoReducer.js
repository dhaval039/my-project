import { ACADEMICINFO_POST } from "../../Actions/types";
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ACADEMICINFO_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
