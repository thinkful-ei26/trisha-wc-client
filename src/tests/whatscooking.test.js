import React from 'react';
import {shallow} from 'enzyme';
import WhatsCooking from '../components/WhatsCooking';

describe('<WhatsCooking />', () => {
  it('Renders without crashing', () => {
    shallow(<WhatsCooking />);
  })

  it('Renders contents initially', () => {
    const wrapper = shallow(<WhatsCooking />);
    expect(wrapper.find('.whats-cooking').exists()).toEqual(true)
    console.log(wrapper.find('.whats-cooking').debug())
  });

  it('Renders without mutation', () => {
    const wrapper = shallow(<WhatsCooking />);
    expect(wrapper.find('.NOT-VALID-SELECTOR').exists()).toEqual(false)
  })

})