import actionThemes from "state/types/themes";

const initialState = {
  dark: false,
};

const theme = (state = initialState, action: any) => {
  switch (action.type) {
    case actionThemes.SWITCH_THEME:
      return {
        ...state,
        dark: !state.dark,
      };
    case actionThemes.SET_THEME:
      return {
        ...state,
        dark: action.payload,
      };
    default:
      return state;
  }
};

export default theme;
