import React from 'react';
import { connect } from 'react-redux'; 
import Spinner from 'react-spinkit';
import {searchRecipes} from '../actions/search';
import { homeClick } from '../actions/controls';
import './search-form.css';

export class SearchForm extends React.Component {

  componentDidMount() {
    this.props.dispatch(searchRecipes());
  }

  renderResults() {
    const { loading, error, recipes } = this.props;
    if (loading) {
      return <Spinner spinnerName="circle" noFadeIn />
    }

    if (error) {
      return <strong>{error}</strong>
    }

    console.log('recipes on SearchForm',recipes);

    const stuff = recipes.map((recipe, index) =>
      <li key={index}>
        {recipe.title}
      </li>
    );

    return (
      <ul className="recipe-search-results">
        {stuff}
      </ul>
    );
  }

  search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }
    console.log(e);
    this.props.dispatch(searchRecipes(this.input.value));
  }

  render() {
    return (
      <section className="search-section">
          <form 
            id="search-form"
            onSubmit={e => {
              this.search(e);
              // let inputs = document.getElementById("search-form").elements;
              // console.log('inputs', inputs);
              // let searchTerm = inputs[0].value;
              // console.log('searchTerm', searchTerm);
              // this.props.dispatch(searchRecipes(searchTerm))
            }
          }> 
            <label htmlFor="search">Search</label>&emsp;
            <input
                aria-controls="recipe-count"
                type="search"
                id="search"
                name="search"
                placeholder="recipe search"
                ref={input => this.input = input}
            />
            <button>Search</button>
          </form>
          <ul className="recipe-search-results">
            {this.renderResults()}
          </ul>
          <button 
            className="home-btn"
            onClick={ () => this.props.dispatch(homeClick())}
          >
            Home
          </button>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  recipes: state.searchReducer.recipes,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(SearchForm);