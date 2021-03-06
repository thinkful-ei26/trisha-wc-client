import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleExpand } from '../actions';

export class Recipes extends Component {

  render() { 
    const { recipes } = this.props;

    /* ======= MAP NESTED OBJECTS IN RECIPES TO ACCESS INGREDIENTS & DIRECTIONS ======= */
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

    /* ========= LIST ALL RECIPES BY MAPPING ========== */
    const recipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe float"
        tabIndex="0"
        onClick={ () => {
          this.props.dispatch(toggleExpand(recipe.id, recipe.expanded))
        }}
      >
        <div
          className="recipe-condensed"
        >
          <div className="recipe-img">
            <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="100%"/>
          </div>
          <h2>{recipe.title}</h2>
          <p className="recipe-description">{recipe.desc}</p>
        </div>
        <div 
          className="detailed"
          style={{display: recipe.expanded ? 'block': 'none'}}
        >
          <hr/>
          <ul className="recipe-details">
            <li><strong>Prep Time:</strong> {recipe.prep} </li>
            <li><strong>Cook Time:</strong> {recipe.cook}</li>
            <li><strong>Number of Servings:</strong> {recipe.serving}</li>
          </ul>
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

    return (recipe);
  }
}

export const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    loading: state.recipeReducer.loading,
    error: state.recipeReducer.error
  }
}

export default connect(mapStateToProps)(Recipes);