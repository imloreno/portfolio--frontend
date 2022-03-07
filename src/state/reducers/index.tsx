import { combineReducers } from "redux";
import routes from "./_routes";
import theme from "./_theme";
import language from "./_language";
import works from "./_works";

const reducer = combineReducers({
  router: routes,
  theme,
  language,
  works,
});

export default reducer;
