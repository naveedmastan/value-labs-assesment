const initialState = {
  menuData: [],
};

const actionsMap = {
  SET_MENU_DATA: (state, action) => {
    const { data = "" } = action;
    if (!data) {
      return state;
    }
    return { ...state, menuData: data };
  },
};

const menuReducer = (state = initialState, action) => {
  if (actionsMap[action.type]) {
    return actionsMap[action.type](state, action);
  }
  return state;
};

export default menuReducer;
