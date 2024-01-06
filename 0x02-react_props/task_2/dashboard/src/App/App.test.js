import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App Componeent Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("should check the notifications component to exist", () => {
    const component = shallow(<App />);
    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("check the existence of the header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });
  it("check the existence of the login component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });
  it("checks the existence of the footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });
});