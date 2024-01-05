import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header component test", () => {
    it("Renders without crashing", () => {
        const header = shallow(<Header />);
        expect(header).toBeDefined();
    });
    it("should renders a h1 tag", () => {
        const header = shallow(<Header />);
        expect(header.exists("img")).toEqual(true);
        expect(header.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
    });
});