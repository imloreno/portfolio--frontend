//Routes
import actionRoutes from "state/types/routes";

//Themes
import actionThemes from "state/types/themes";

//Languages
import actionLanguages from "state/types/language";
import actionWorks from "state/types/works";

//Themes
const switchTheme = () => ({
  type: actionThemes.SWITCH_THEME,
});
const setTheme = (payload: boolean): object => ({
  type: actionThemes.SET_THEME,
  payload,
});

//Pages
const setPageNum = (payload: number) => ({
  type: actionRoutes.SET_PAGE_TARGET,
  payload,
});

//Languages
const setLanguaje = (payload: any) => ({
  type: actionLanguages.SET_LANGUAGE,
});

//Works
const setWorkList = (payload: any) => ({
  type: actionWorks.SET_WORK,
  payload,
});

export { switchTheme, setTheme, setPageNum, setLanguaje, setWorkList };
