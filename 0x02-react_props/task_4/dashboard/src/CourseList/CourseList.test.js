import CourseList from "./CourseList";
import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const courseList = shallow(<CourseList />);

    expect(courseList.exists()).toBe(true);
  });

  it("renders 5 different rows", () => {
    const courseList = shallow(<CourseList />);

    expect(courseList.find("thead").children()).toHaveLength(2);
    courseList.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });

    expect(courseList.find("tbody").children()).toHaveLength(3);
    courseList.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
  });
});