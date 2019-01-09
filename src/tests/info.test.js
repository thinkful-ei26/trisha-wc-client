import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from '../components/InfoModal';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal info={true} />);
  })

  // it('Renders contents initially', () => {
  //   const info = true;
  //   const wrapper = shallow(<InfoModal info={info} />);
  //   wrapper.setState({
  //     info: true
  //   })
  //   console.log(wrapper.info)
  //   expect(wrapper.info).toEqual(info);
  //   // expect(wrapper.hasClass('info-content')).toEqual(true);
  //   // expect(wrapper.contains(<h3>How to use this app</h3>)).toEqual(false);

  //   // const mainDiv = wrapper.find("info-overlay");
  //   // console.log(mainDiv);
  //   // console.log(wrapper.debug())
    
  //   // expect(wrapper.hasClass('got-it-btn'))
  //   expect(wrapper.contains(<a
  //     className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
  //   >
  //   GitHub Repo
  //   </a>)).to.equal(false)
  // });

});

