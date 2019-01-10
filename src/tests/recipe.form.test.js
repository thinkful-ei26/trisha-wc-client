import React from 'react';
import {shallow, mount} from 'enzyme';
import RecipeForm from '../components/RecipeForm';

describe('<RecipeForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RecipeForm info={true} />);
  })

  
  // it('Renders new-recipe-form contents initially', () => {
  //   const dispatch = jest.fn()
  //   const wrapper = shallow(<RecipeForm info={true} dispatch={dispatch} />);
  //   // expect(wrapper.hasClass('new-recipe-form'))
  //   // expect(wrapper.hasClass('clear-values-btn'))
  //   // expect(wrapper.hasClass('cancel-add-recipe-btn'))

  //   expect(wrapper.find('.new-recipe-form').exists()).toEqual(true)
  //   console.log(wrapper.find('.new-recipe-form').debug())
  // });

  // it('Should fire async fetch on form submit', () => {})
  // it('Async fetch should not fire if the input is empty on form submit', () => {})
  // it('Should render correct input validations', () => {})
})