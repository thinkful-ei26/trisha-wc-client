import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from '../components/InfoModal';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal info={true} />);
  })

  it('Renders info-contents initially', () => {
    const wrapper = shallow(<InfoModal info={true} />);
    expect(wrapper.hasClass('info-content'))
    expect(wrapper.hasClass('got-it-btn'))
    expect(wrapper.contains(<a
      className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
  >
    GitHub Repo
  </a>))
  });
})