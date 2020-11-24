const initialState = {
  menuData: [],
};

const actionsMap = {
  SET_MENU_DATA: (state, action) => {
    const { data = [] } = action;
    console.log(action)
    if (!data) {
      return state;
    }
    return { ...state, menuData: data };
  },
};

const menuReducer = (state = initialState, action) => {
  console.log(action)
  if (actionsMap[action.type]) {
    return actionsMap[action.type](state, action);
  }
  return state;
};

export default menuReducer;
