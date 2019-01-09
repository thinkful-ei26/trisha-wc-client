import React from 'react';
import {shallow} from 'enzyme';
import RecipeForm from './RecipeForm';

describe('<RecipeForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RecipeForm info={true} />);
    console.log(shallow(<RecipeForm />))
  })

  it('Renders new-recipe-form contents initially', () => {
    const wrapper = shallow(<RecipeForm info={true} />);
    expect(wrapper.hasClass('new-recipe-form'))
    expect(wrapper.hasClass('clear-values-btn'))
    expect(wrapper.hasClass('cancel-add-recipe-btn'))
  });

  // it('Should fire async fetch on form submit', () => {})

  // it('Should not fire async fetch if the input is empty on form submit', () => {})

  // it('Should render correct input validations', () => {})
})