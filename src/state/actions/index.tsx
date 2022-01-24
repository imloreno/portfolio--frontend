import actionRoutes from "state/types/routes";
import actionThemes from "state/types/themes";

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

export { switchTheme, setTheme, setPageNum };
