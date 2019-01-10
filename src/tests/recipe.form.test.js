import React from 'react';
import {shallow, mount} from 'enzyme';
import RecipeForm from '../components/RecipeForm';

describe('<RecipeForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RecipeForm info={true} />);
  })
})