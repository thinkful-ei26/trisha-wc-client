import React from 'react';
import {shallow, mount } from 'enzyme';
import { Recipes } from '../components/Recipes';

describe('<Recipes />', () => {
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
    shallow(<Recipes error={null} loading={false} recipes={recipes} />)
  })

  it('Renders contents initially', () => {
    const dispatch = jest.fn()
    const wrapper = mount(<Recipes error={null} loading={false} recipes={recipes} dispatch={dispatch} />)

    // console.log(wrapper.find('.recipe').debug())
    expect(wrapper.find('.recipe').exists()).toEqual(true)
    expect(wrapper.find('.float').exists()).toEqual(true)
    expect(wrapper.find('.recipe-condensed').exists()).toEqual(true)
    expect(wrapper.find('.recipe-img').exists()).toEqual(true)
    expect(wrapper.find('.detailed').exists()).toEqual(true)
    expect(wrapper.find('.ingredients-list').exists()).toEqual(true)
    expect(wrapper.find('.directions-list').exists()).toEqual(true)
  });

//end of recipes test   
})