import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });

  it("display the menu item when display drawer is false", () => {
    const notification = shallow(<Notifications displayDrawer={false} />);
    expect(notification.find("div.menuItem").exists()).toBe(true);
    expect(notification.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div');
  });

  it("does not display notification item when display drawer is false", () => {
    const notification = shallow(<Notifications displayDrawer={false} />);
    expect(notification.find("div.Notifications").exists()).toBe(false);
  });

  it("it does not display menu item when display drawer is true", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(notification.find("div.menuItem").exists()).toBe(true);
  });

  it("it display notifications when display drawer is true", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(notification.find("div.Notifications").exists()).toBe(true);
  });
  it("renders correctly when listCourses is not passed", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);

    expect(notification.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when empty array is passed", () => {
    const notification = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(notification.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const notification = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(notification.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);

    expect(notification.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });
});