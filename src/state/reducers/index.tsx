import { combineReducers } from "redux";
import routes from "./_routes";

const reducer = combineReducers({
  router: routes,
});

export default reducer;
