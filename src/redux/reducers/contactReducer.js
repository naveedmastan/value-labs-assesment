const initialState = {
  savedForms: [],
};

const actionsMap = {
  SET_CONTACT_FORM_DATA: (state, action) => {
    const { formData = "" } = action;
    if (!formData) {
      return state;
    }
    return { ...state, savedForms: [...state.savedForms, formData] };
  },
};

const contactReducer = (state = initialState, action) => {
  if (actionsMap[action.type]) {
    return actionsMap[action.type](state, action);
  }
  return state;
};

export default contactReducer;
