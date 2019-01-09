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
  this.props.dispatch(fetchRecipes());
  }

  renderResults() {
    const { error, loading } = this.props;

    if (loading) {
      return (
      <div className="spinner">
        <Spinner name="three-bounce" color="purple"/>
      </div>
      )
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
        <section className="controls">

        {/* ========= SURPRISE BTN ========== */}
          <button 
            className="surprise-btn"
            onClick={ () => {
              this.props.dispatch(surpriseClick())
            }}
          >
            Surprise Me
          </button>

        {/* ========= SHOW ALL RECIPES ========== */}
          <button 
            className="show-all-btn"
            onClick={ () => {
              this.props.dispatch(fetchRecipes());
            }}>
            Show All Recipes
          </button>

         {/* ========= SEARCH FORM ========== */}
          <div className="search-section">
            <form 
              id="search-form"
              className="search-form"
              onChange={e => {
              //invoke the search fn on search submit ∆
                  this.search(e);
                }
              }
            >
              <div className="input-wrapper">
                <input
                    aria-controls="recipe-count"
                    type="search"
                    id="search"
                    name="search"
                    className="search-input"
                    placeholder="Search..."
                    ref={input => this.input = input}
                />
                <label 
                  htmlFor="search"
                  className="search-label"
                >
                  <button
                    className="search-btn" 
                  >
                    <svg className="search-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="search-svg">
                      <path d="M2,10.666V5.333L5.333,2h5.333L14,5.333v5.333L10.667,14H5.333ZM4.364,0,0,4.363v7.273L4.364,16h7.273l1.757-1.757L18,20h2V18l-5.757-4.606L16,11.637V4.363L11.637,0Z" 
                      />
                    </svg>
                  </button>
                </label>
              </div>
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