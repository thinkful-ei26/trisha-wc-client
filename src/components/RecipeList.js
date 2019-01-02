import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
import Recipes from './Recipes';
import { surpriseClick } from '../actions/surprise';

export class RecipeList extends React.Component {

  render () {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(surpriseClick())
          }}>
          Surprise Me
        </button>
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