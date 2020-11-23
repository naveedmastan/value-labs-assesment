import { combineReducers } from "redux";
import aboutus from "./aboutUsReducer";
import contact from "./contactReducer";
import menu from "./menuReducer";

export default combineReducers({
  aboutus,
  contact,
  menu,
});
