import React from 'react';
import {shallow} from 'enzyme';
import RecipeForm from '../components/RecipeForm';

describe('<RecipeForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RecipeForm info={true} />);
  })

  it('Renders new-recipe-form contents initially', () => {
    const wrapper = shallow(<RecipeForm info={true} />);
    expect(wrapper.hasClass('new-recipe-form'))
    expect(wrapper.hasClass('clear-values-btn'))
    expect(wrapper.hasClass('cancel-add-recipe-btn'))
  });

  // it('Should fire async fetch on form submit', () => {})
  // it('Async fetch should not fire if the input is empty on form submit', () => {})
  // it('Should render correct input validations', () => {})
})