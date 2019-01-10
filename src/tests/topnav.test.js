import React from 'react';
import {shallow, mount} from 'enzyme';
import { TopNav } from '../components/TopNav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav info={false} addRecipe={false} />);
  })

  it('Renders contents initially', () => {
    const dispatch = jest.fn()
    const wrapper = mount(<TopNav info={false} addRecipe={false} dispatch={dispatch} />)

    expect(wrapper.find('.header-content').exists()).toEqual(true)
    expect(wrapper.find('.header-center').exists()).toEqual(true)
    expect(wrapper.find('.header-right').exists()).toEqual(true)
  });
  
})