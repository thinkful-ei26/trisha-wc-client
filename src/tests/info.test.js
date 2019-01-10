import React from 'react';
import {shallow, mount} from 'enzyme';
import { InfoModal } from '../components/InfoModal';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal info={true} />);
  })

  it('Renders contents initially', () => {
    const dispatch = jest.fn()
    const wrapper = mount(<InfoModal info={false} dispatch={dispatch} />)

    expect(wrapper.find('.info-content').exists()).toEqual(true)
    expect(wrapper.find('.info-overlay').exists()).toEqual(true)
    expect(wrapper.find('.got-it-btn').exists()).toEqual(true)
    expect(wrapper.find('.github-repo').exists()).toEqual(true)
    expect(wrapper.find('.info-text-list').exists()).toEqual(true)
  });

});

