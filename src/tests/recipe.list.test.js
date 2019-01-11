import React from 'react';
import {shallow} from 'enzyme';
import RecipeList from '../components/RecipeList';

const mockFetchRecipeAction = {
  type: 'FETCH RECIPE'
};
jest.mock('../actions', () => Object.assign({}, require.requireActual('../actions')), {
  fetchRecipe: jest.fn().mockImplementation(() => {
    return mockFetchRecipeAction;
  })
});

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

describe('<RecipeList />', () => {
  let seedList = [];
  beforeAll(() => {
    for (let i=0; i<10; i++) {
      seedList.push({
        recipes
      })
    }
  })

  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<RecipeList error={null} loading={false} recipes={recipes} dispatch={dispatch} />)
  })
 
});