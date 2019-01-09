import React from 'react';
import {shallow} from 'enzyme';
import TopNav from '../components/TopNav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav info={false} addRecipe={false} />);
  })

  // it('Renders contents initially', () => {
  //   const wrapper = shallow(<TopNav info={false} addRecipe={false} />);
  //   expect(wrapper.hasClass('info-content'))
  // });
})