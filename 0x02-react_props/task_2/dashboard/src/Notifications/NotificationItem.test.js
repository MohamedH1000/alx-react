import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import React from 'react';
import NotificationItem from './NotificationItem';

describe("rendering the component without crashing", () => {
    it("renders the notification item component without crash", () => {
        const notificationItem = shallow(<NotificationItem />);
        expect(notificationItem.exists()).toBe(true);
    })

    it('renders correct html from type="default" value="test" props', () => {
        const notificationItem = shallow(<NotificationItem />);
        notificationItem.setProps({type : "default", value: "test"})
        expect(notificationItem.html()).toEqual("<li data-notification-type='default'></li>");
    });

    it("by passing a dummy html prop the correct html to be rendered", () => {
        const notificationItem = shallow(<NotificationItem />);
        notificationItem.setProps({html: "<p>test<p>"});
        expect(notificationItem.html()).toEqual('<li data-urgent="true"><p>test<p></li>');
    });
});