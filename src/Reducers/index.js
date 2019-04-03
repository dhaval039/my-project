import { combineReducers } from "redux";
import PostReducer from "./PostReducr";
import LoginReducer from "./LoginReducer";
import masters from "./Masters";

export default combineReducers({
  posts: PostReducer,
  LoginReducer,
  masters
});
