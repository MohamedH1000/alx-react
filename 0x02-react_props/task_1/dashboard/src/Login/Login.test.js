import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login component test", () => {
    it("renders without crashing", () => {
        const login = shallow(<Login />);
        expect(login.exists).toEqual(true);
    });
    it("should have 2 label tags and 2 input tags", () => {
        const login = shallow(<Login />);
        expect(login.find("label")).toHaveLength(2);
        expect(login.find("input")).toHaveLength(2);
    });
});