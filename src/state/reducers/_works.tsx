import actionWorks from "state/types/works";

const initialState = {
  works: [],
  portfolio: [],
  achievements: [],
};

const works = (state = initialState, action: any) => {
  switch (action.type) {
    case actionWorks.SET_WORK:
      return {
        ...state,
        works: action.payload,
      };

    case actionWorks.SET_PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload,
      };

    case actionWorks.SET_ACHIEVEMENTS:
      return {
        ...state,
        achievements: action.payload,
      };

    default:
      return state;
  }
};

export default works;
