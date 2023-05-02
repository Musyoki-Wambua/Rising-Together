import React from "react";
import { shallow } from "enzyme";
import Help from "./Help";

describe("Help Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Help />);
  });

  it("should render the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render six Card components", () => {
    const cards = wrapper.find("Card");
    expect(cards).toHaveLength(6);
  });

  it("should render Register/Login card with correct title and image", () => {
    const card = wrapper.find("Card").at(0);
    expect(card.prop("title")).toEqual("Register/Login");
    expect(card.find("img").prop("src")).toEqual("login.png");
  });
});
