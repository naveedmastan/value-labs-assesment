import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AboutUs } from "../../components/about-us";

configure({ adapter: new Adapter() });

describe("AboutUs", () => {
  const mockStore = configureStore([thunk]);
  let store;

  it("should render AboutUs component with out content from store ", () => {
    const initialState = {};
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <AboutUs />
      </Provider>
    );
    expect(wrapper).not.toBe(null);
  });
  it("should render AboutUs component with content from store", () => {
    const initialState = { aboutus: { content: ["123"] } };
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <AboutUs />
      </Provider>
    );
    expect(wrapper).not.toBe(null);
  });
});
