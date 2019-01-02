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

    const steps = (directions) => {
      return <li>{directions}</li>};

    // const steps = (directions) => {
    //   return directions.map((step, index) => {
    //     console.log('step');
    //     // return (
    //     // <li
    //     //   key={index}
    //     //   className="directions"
    //     // >
    //     //   {step}
    //     // </li>); 
    //   })
    // }

    const expandedRecipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe"
        tabIndex="0"
        onClick={ () => {
          this.props.dispatch(toggleExpand(recipe.id))
          console.log(recipe);
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
        <br/>
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
            <strong>Ingredients:</strong> 
          </p>
          <ul>
            {ingredient(recipe.ing)}
          </ul>
          {/* <p><strong>Directions:</strong> {recipe.directions}</p> */}
          <p>
            <strong>Directions:</strong> 
          </p>
          <ol>
            {steps(recipe.directions)}
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