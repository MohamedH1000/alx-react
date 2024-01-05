import React from 'react';
import { shallow } from "enzyme";
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe("Footer Test", () => {
    it("should render with out crashing", () => {
        const footer = shallow(<Footer />);
        expect(footer.exists()).toEqual(true);
    });
    it("Verify that the components at the very least render the text “Copyright”", () => {
        const footer = shallow(<Footer />);
        expect(footer.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
});