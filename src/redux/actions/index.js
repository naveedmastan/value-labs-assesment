import * as types from "../../constants/ActionTypes";
import apiCalls from "../api-calls";

const receiveAboutUsData = (content) => ({
  type: types.GET_ABOUT_US_CONTENT,
  content,
});

export const getAboutUsContent = () => (dispatch) => {
  apiCalls.getAboutUsData().then((content) => {
    dispatch(receiveAboutUsData(content));
  });
};

export const saveContactForm = (formData) => (dispatch) => {
  dispatch({
    type: types.SET_CONTACT_FORM_DATA,
    formData,
  });
};
export const getMenuContent = (menuType) => (dispatch) => {
  apiCalls.getMenuData(menuType).then((data) => {
    dispatch({
      type: types.SET_MENU_DATA,
      data,
    });
  });
};
