import actionLanguages from "state/types/language";

const initialState = {
  lang: "en",
  langPick: {},
};

type action = {
  type: string;
  payload: any;
};

const language = (state: any = initialState, action: action) => {
  switch (action.type) {
    case actionLanguages.SET_LANGUAGE:
      return {
        ...state,
        langPick: action.payload,
      };

    case actionLanguages.SWITCH_LANGUAGE:
      return {
        ...state,
        langPick: action.payload,
      };

    default:
      return state;
  }
};

export default language;
