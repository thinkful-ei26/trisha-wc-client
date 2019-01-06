import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
import Recipes from './Recipes';
import { surpriseClick } from '../actions/controls';
import fetchRecipes from '../actions';
import './controls.css';

export class RecipeList extends React.Component {

  render () {
    console.log('RecipeList',this.props);
    if (!this.props.search) {
      return (
        <div className="container">
          <section className="controls">
            <button 
              className="surprise-btn"
              onClick={ () => {
                this.props.dispatch(surpriseClick())
              }}>
              Surprise Me
            </button>
            <button 
              className="show-all-btn"
              onClick={ () => {
                this.props.dispatch(fetchRecipes());
              }}>
              Show All Recipes
            </button>
          </section>
          <ul 
            className="recipe-list" 
            aria-live="polite"
          >
            <Recipes />
          </ul>
        </div>
        
      )
    } else {
      return <span></span>
    }
  
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    search: state.searchReducer.search
  }
}

export default connect(mapStateToProps)(RecipeList);