import React from 'react';
import { connect } from 'react-redux';
import { surpriseClick } from '../actions/controls';
import fetchRecipes from '../actions';
import './controls.css';

import './recipe-list.css';
import Recipes from './Recipes';

export class Controls extends React.Component {

  render () {
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
          {/* <ul 
          className="recipe-list" 
          aria-live="polite"
          >
            <Recipes />
          </ul> */}
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
  }
}

export default connect(mapStateToProps)(Controls);