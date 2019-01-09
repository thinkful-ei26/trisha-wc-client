import React from 'react';
import {shallow} from 'enzyme';
import WhatsCooking from '../components/WhatsCooking';

describe('<WhatsCooking />', () => {
  it('Renders without crashing', () => {
    shallow(<WhatsCooking />);
  })

  // it('Renders contents initially', () => {
  //   const wrapper = shallow(<WhatsCooking />);
  //   expect(wrapper.hasClass('info-content'))
  // });
})