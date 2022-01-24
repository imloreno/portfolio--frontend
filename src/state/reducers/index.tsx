import { combineReducers } from "redux";
import routes from "./_routes";
import theme from "./_theme";

const reducer = combineReducers({
  router: routes,
  theme,
});

export default reducer;
