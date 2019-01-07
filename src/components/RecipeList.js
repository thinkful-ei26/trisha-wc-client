import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
import Recipes from './Recipes';
import { surpriseClick } from '../actions/controls';
import fetchRecipes from '../actions';
import './controls.css';
import searchRecipes from '../actions';

export class RecipeList extends React.Component {

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
          <div className="search-section">
            <form 
              id="search-form"
              onSubmit={e => {
                e.preventDefault();
                let input = document.getElementById("search-form").elements;
                console.log('input', input);
                let searchTerm = input[0].value;
                console.log('searchTerm', searchTerm);
                this.props.dispatch(searchRecipes(searchTerm))
                }
              }
            >
              <label htmlFor="search">Search</label>&emsp;
              <input
                  aria-controls="recipe-count"
                  type="search"
                  id="search"
                  name="search"
                  placeholder="recipe search"
              />
            </form>
        </div>
        </section>
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