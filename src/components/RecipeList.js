import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
import Recipes from './Recipes';
import { surpriseClick } from '../actions/controls';
import fetchRecipes, { searchSubmit } from '../actions';
import './controls.css';
// import searchRecipes from '../actions';
import Spinner from 'react-spinkit';

export class RecipeList extends React.Component {

  componentDidMount() {
  console.log('Recipes component loaded');
  this.props.dispatch(fetchRecipes());
  }

  renderResults() {
    const { error, loading } = this.props;
    console.log('renderReslts props:',this.props);

    if (loading) {
      return <Spinner spinnerName="circle" fadeIn="none" />;
  }

    if (error) {
      console.log(`There was an error: ${error}`);
      return <strong>{error}</strong>
    }

    return (
      <ul className="recipe-search-results">
       <Recipes />
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
                // this.props.dispatch(searchRecipes(searchTerm))
                this.props.dispatch(searchSubmit(searchTerm))
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
        </div>
        </section>
        <ul className="search-results">
          {this.renderResults()}
        </ul>
        {/* <ul 
          className="recipe-list" 
          aria-live="polite"
        >
          <Recipes />
        </ul> */}
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