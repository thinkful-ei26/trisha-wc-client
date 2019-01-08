import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Recipes from './Recipes';

import fetchRecipes, { surpriseClick }  from '../actions';
import { searchRecipes } from '../actions/search';

import './recipe-list.css';
import './controls.css';

export class RecipeList extends React.Component {

  //on page load, fetch all recipes from db
  componentDidMount() {
  console.log('Recipes component loaded');
  this.props.dispatch(fetchRecipes());
  }

  renderResults() {
    const { error, loading } = this.props;

    if (loading) {
      return <Spinner spinnerName="circle" fadeIn="none" />;
    }

    if (error) {
      console.log(`There was an error: ${error}`);
      return <strong>{error}</strong>
    }

    //on success, render the Recipe component
    return ( <Recipes /> )
  }

  //grab the search value and dispatch the searchRecipe async fn
  search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }
    this.props.dispatch(searchRecipes(this.input.value));
  }

  render () {
    return (
      <div className="container">
      {/* ========= CONTROLS ========== */}
        <section className="controls">
          <button 
            className="surprise-btn"
            onClick={ () => {
              this.props.dispatch(surpriseClick())
            }}
          >
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
              onChange={e => {
              //invoke the search fn on search submit ∆
                  this.search(e);
                }
              }
            >
              <label htmlFor="search"></label>&emsp;
              <input
                  aria-controls="recipe-count"
                  type="search"
                  id="search"
                  name="search"
                  className="search-input"
                  placeholder="Recipe Search..."
                  ref={input => this.input = input}
              />
            </form>
        </div>
        </section>
{/* ========= RECIPE-LIST ========== */}
        <ul className="recipe-list">
          {this.renderResults()}
        </ul>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    loading: state.recipeReducer.loading,
    error: state.recipeReducer.error,
  }
}

export default connect(mapStateToProps)(RecipeList);