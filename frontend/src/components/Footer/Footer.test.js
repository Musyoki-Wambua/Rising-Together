import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should render without errors', () => {
    const component = wrapper.find('.footer');
    expect(component.length).toBe(1);
  });

  it('should display the correct text', () => {
    const text = wrapper.find('p').text();
    expect(text).toEqual('© 2023, MyWebsite. All rights reserved.');
  });
});
