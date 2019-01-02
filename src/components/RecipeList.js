import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
import Recipes from './Recipes';
import { surpriseClick } from '../actions/controls';
import fetchRecipes from '../actions';

export class RecipeList extends React.Component {

  render () {
    return (
      <div>
        <div className="controls">
          <button onClick={ () => {
            this.props.dispatch(surpriseClick())
            }}>
            Surprise Me
          </button>
          <button onClick={ () => {
            this.props.dispatch(fetchRecipes());
            }}>
            Show All Recipes
          </button>
        </div>
        <ul 
          className="recipe-list" 
          aria-live="polite"
        >
          <Recipes />
        </ul>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
  }
}

export default connect(mapStateToProps)(RecipeList);