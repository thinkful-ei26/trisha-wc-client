import React from 'react';
import {shallow} from 'enzyme';
import Input from '../components/Input';

//testing not worth it ok per Chris A. Wed, 1/9/19

describe.skip('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input/>);
  })

  // it('Renders info-contents initially', () => {
  //   const wrapper = shallow(<Input />);
  //   // expect(wrapper.hasClass('info-content'))
  // });
})