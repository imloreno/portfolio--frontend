import { combineReducers } from "redux";
import routes from "./_routes";
import theme from "./_theme";
import language from "./_language";

const reducer = combineReducers({
  router: routes,
  theme,
  language,
});

export default reducer;
