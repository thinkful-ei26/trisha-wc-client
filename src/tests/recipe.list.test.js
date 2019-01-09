import React from 'react';
import {shallow, mount} from 'enzyme';
import RecipeList from '../components/RecipeList';

describe('<RecipeList />', () => {
  const recipes = [ 
    { ing: [ 'ing 1','ing 2','ing 3'],
      expanded: false,
      title: 'Recipe Title 1',
      desc: 'Bacon ipsum.',
      serving: '2',
      imgUrl:'https://sweettootsco.files.wordpress.com/2018/12/calzone.jpg',
      prep: '10 min',
      cook: '20 min',
      directions:'Bacon ipsum',
      id: '00001' 
    },
    { ing: [ 'ing 1','ing 2','ing 3'],
      expanded: false,
      title: 'Recipe Title 2',
      desc: 'Bacon ipsum.',
      serving: '2',
      imgUrl:'https://sweettootsco.files.wordpress.com/2018/12/calzone.jpg',
      prep: '10 min',
      cook: '20 min',
      directions:'Bacon ipsum',
      id: '00002' 
    },
  ];

  it('Renders without crashing', () => {
    shallow(<RecipeList error={null} loading={false} recipes={recipes} />)
  })

  // it('Renders contents initially', () => {
  //   const wrapper = shallow(<RecipeList error={null} loading={false} recipes={recipes} />)
  
  //   expect(wrapper.hasClass('ing-list'));
  //   expect(wrapper.hasClass('askdjha'))
  //   expect(wrapper.contains(<a
  //     className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
  // >
  //   GitHub Repo
  // </a>))

  //end of it test
  // });

//end of recipes test   
});