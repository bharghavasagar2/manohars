import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import roomsreducer from "./roomsreducer";

export default combineReducers({
  replaceMe: () => "hi",
  form: formReducer,
  rooms: roomsreducer
});
