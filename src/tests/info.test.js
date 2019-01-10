import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoModal from '../components/InfoModal';

import store from '../store';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal info={true} />);
  })

  // it('renders contents', () => {
  //   const wrapper = shallow(<InfoModal info={true} />);
  //   expect(wrapper.shallow().find('.got-it-btn').exists()).toBe(true)
  //   console.log(wrapper.find('.got-it-btn'))

  // })

  // it('Renders contents initially', () => {
  //   const info = true;
  //   const wrapper = shallow(<InfoModal info={info} />);
  //   wrapper.setState({
  //     info: true
  //   })
  //   console.log(wrapper.state)
  //   expect(wrapper.state.info).toEqual(info);
  //   expect(wrapper.hasClass('info-content')).toEqual(true);
  //   expect(wrapper.hasClass('got-it-btn'))
  //   expect(wrapper.contains(<a
  //     className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
  //   >
  //   GitHub Repo
  //   </a>))
  // });

});

