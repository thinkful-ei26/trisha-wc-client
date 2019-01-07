import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchRecipes, { surprise } from '../actions';
import { toggleExpand } from '../actions/recipe';

export class Recipes extends Component {

  componentDidMount() {
    console.log('the page is loading', this.props);
    this.props.dispatch(fetchRecipes());
    // this.props.dispatch(surprise());
  }

  render() { 
    const { recipes } = this.props;

    console.log('props on Recipes.js',this.props);
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

    const expandedRecipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe float"
        tabIndex="0"
        onClick={ () => {
          this.props.dispatch(toggleExpand(recipe.id))
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

    return (expandedRecipe);
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes
  }
}

export default connect(mapStateToProps)(Recipes);