import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../actions';
import { toggleExpand } from '../actions/recipe';

export class Recipes extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() { 
    const { recipes } = this.props;

    const expandedRecipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe"
        onClick={e => {
          this.props.dispatch(toggleExpand(recipe.id))
          console.log(recipe);
        }}
      >
        <h3>{recipe.title}</h3>
        <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
        <p>{recipe.desc}</p>
        <div 
          className="detailed"
          style={{display: recipe.expanded ? 'block': 'none'}}
        >
          <p>
            <strong>Prep Time:</strong> {recipe.prep}
          </p>
          <p>
            <strong>Cook Time:</strong> {recipe.cook}
          </p>
          <p>
            <strong>Number of Servings:</strong> {recipe.serving}
          </p>
          <p>
            <strong>Ingredients:</strong> {recipe.ing}
          </p>
          <p><strong>Directions:</strong> {recipe.directions}</p>
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