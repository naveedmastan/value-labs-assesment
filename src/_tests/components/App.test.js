import React from "react";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16";
import App from "../../components/App";

configure({ adapter: new Adapter() });

describe("App", () => {
  const mockStore = configureStore([thunk]);
  it("should render App component", () => {
    const store = mockStore({});
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).not.toBe(null);
  });
});
