import actionWorks from "state/types/works";

const initialState = {
  works: [],
};

const works = (state = initialState, action: any) => {
  switch (action.type) {
    case actionWorks.SET_WORK:
      return {
        ...state,
        works: action.payload,
      };
    default:
      return state;
  }
};

export default works;
