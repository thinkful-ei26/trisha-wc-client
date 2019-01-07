import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
import Recipes from './Recipes';
import { surpriseClick } from '../actions/controls';
import fetchRecipes from '../actions';
import './controls.css';
import searchRecipes from '../actions';

export class RecipeList extends React.Component {

  renderResults() {
    const { error, loading } = this.props;
    console.log('renderReslts props:',this.props);

    if (error) {
      return <strong>{error}</strong>
    }

    return (
      <ul className="recipe-search-results">
       <li>renderResults</li>
    </ul>
    )
  }

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
                  ref={input => this.input = input}
              />
            </form>
            <ul className="search-results">
              {this.renderResults()}
            </ul>
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
    loading: state.recipeReducer.loading,
    error: state.recipeReducer.error,
    searchTerm: state.recipeReducer.searchTerm
  }
}

export default connect(mapStateToProps)(RecipeList);