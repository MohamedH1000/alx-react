import { shallow } from "enzyme";
import React from 'react';
import CourseListRow from "./CourseListRow";

describe("course list row component test", () => {
    it("should render without crashing", () => {
        const courseListRow = shallow(<CourseListRow />);
        expect(courseListRow.exists()).toBe(true);
    });
    it("when is header is true \
    test the component renders one cell with colspan = 2 \
    when textSecondCell does not exist", () => {
        const courseListRow = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null}/>);
        
        expect(courseListRow.find("tr").children()).toHaveLength(1);
        expect(courseListRow.find("tr").childAt(0).html()).toEqual('<th colSpan="2">test</th>');
    });
    it("it should render two cell when second test cell is not null", () => {
        const courseListRow = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="null"/>);

        expect(courseListRow.find("tr").children()).toHaveLength(2);
        expect(courseListRow.find("tr").childAt(0).html()).toEqual("<td>test</td>");
        expect(courseListRow.find("tr").childAt(1).html()).toEqual("<td>test</td>");
    });
});