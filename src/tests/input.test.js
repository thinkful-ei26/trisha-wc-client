import React from 'react';
import {shallow} from 'enzyme';
import Input from '../components/Input';

describe.skip('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input/>);
  })

  // it('Renders info-contents initially', () => {
  //   const wrapper = shallow(<Input />);
  //   // expect(wrapper.hasClass('info-content'))
  // });
})