const initialState = {
  content: "",
};

const actionsMap = {
  GET_ABOUT_US_CONTENT: (state, action) => {
    const { content = "" } = action;
    if (!content) {
      return state;
    }
    return { ...state, content };
  },
};

const aboutUsReducer = (state = initialState, action) => {
  if (actionsMap[action.type]) {
    return actionsMap[action.type](state, action);
  }
  return state;
};

export default aboutUsReducer;
