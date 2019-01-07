// import React from 'react';
// import {searchRecipes} from '../actions/search';

// export default function Controls(props) {

//   return (
//     <section className="search-section">
//         <form 
//           id="search-form"
//           onSubmit={e => {
//             e.preventDefault();
//             let inputs = document.getElementById("search-form").elements;
//             console.log('inputs', inputs);
//             let searchTerm = inputs[0].value;
//             console.log('searchTerm', searchTerm);
//             // this.props.dispatch(searchRecipes(searchTerm))
//           }
//         }>
//           <label htmlFor="search">Search</label>&emsp;
//           <input
//               aria-controls="recipe-count"
//               type="search"
//               id="search"
//               name="search"
//               placeholder="recipe search"
//           />
//         </form>
//     </section>
//   );
// };

import React from 'react';
import { connect } from 'react-redux'; 
import Spinner from 'react-spinkit';
import {searchRecipes} from '../actions/search';
import { homeClick } from '../actions/controls';
import './search-form.css';

import { toggleExpandSearch } from '../actions/controls';

export class SearchForm extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(searchRecipes());
  //   console.log('look',this.props);
    
  // }

  renderResults() {
    const { loading, error } = this.props;
    if (loading) {
      return <Spinner spinnerName="circle" noFadeIn />
    }

    if (error) {
      return <strong>{error}</strong>
    }

    console.log('this.props.recipes is an array of objects, will log only when you make a successful SearchTerm submit on SearchForm',this.props.recipes);
    console.log('this.props on SearchForm is an object with prop like dispatch & recipes',this.props);


    //create an async action, that when you click on the <li> you change recipe (with correct id) and it's expanded to true


    const ingredient = (ingredients) => {
      return ingredients.map((ingredient, index) => {
        return (
        <li
          key={index}
          className="ing-list"
        >
          {ingredient}
        </li>); 
      })
    }

    const stepsArray = (directions) => {
      return directions.split('\n')
    };

    const steps = (dirArray) => {
      return dirArray.map((step, index) => {
        return (
        <li
          key={index}
          className="directions"
        >
          {step}
        </li>); 
      })
    }

    const expandedRecipeSearch = this.props.recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe float"
        tabIndex="0"
        onClick={ () => {
          console.log('the id of the clicked recipe <li> on SearchForm',recipe.id)
          this.props.dispatch(toggleExpandSearch(recipe.id))
        }}
      >
        <div
          className="recipe-condensed"
        >
          <div className="recipe-img">
            <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="100%"/>
          </div>
          <h3>{recipe.title}</h3>
          <p>{recipe.desc}</p>
        </div>
        <div 
          className="detailed"
          style={{display: recipe.expanded ? 'block': 'none'}}
        >
          <hr/>
          <p>
            <strong>Prep Time:</strong> {recipe.prep}
            <br/>
            <strong>Cook Time:</strong> {recipe.cook}
            <br/>
            <strong>Number of Servings:</strong> {recipe.serving}
          </p>
          <p>
            <strong>Ingredients:</strong> 
          </p>
          <ul className="ingredients-list">
            {ingredient(recipe.ing)}
          </ul>
          <p>
            <strong>Directions:</strong> 
          </p>
          <ol className="directions-list">
            {steps(stepsArray(recipe.directions))}
          </ol>
        </div>
      </li>
    ));
    
    return (
      <ul className="recipe-search-results">
        {expandedRecipeSearch}
      </ul>
    );
  }

  search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }
    this.props.dispatch(searchRecipes(this.input.value));
  }

  render() {
    return (
      <div className="search-overlay">
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
            <button className="submit-btn">Submit</button>
          </form>
          <button 
            className="home-btn"
            onClick={ () => this.props.dispatch(homeClick())}
          >
            Home
          </button>
          <ul className="recipe-search-results">
            {this.renderResults()}
          </ul>
      </section>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  recipes: state.searchReducer.recipes,
  loading: state.loading,
  error: state.error,
  searchId: state.id
});

export default connect(mapStateToProps)(SearchForm);