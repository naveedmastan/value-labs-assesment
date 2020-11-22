import { combineReducers } from "redux";
import aboutus from "./aboutUsReducer";
import contact from "./contactReducer";

export default combineReducers({
  aboutus,
  contact,
});
