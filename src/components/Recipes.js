import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../actions';

import { toggleExpand } from '../actions/recipe';
// import recipeListReducer from '../reducers/recipeListReducer';

export class Recipes extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() { 
    // let expand;
    const { recipes } = this.props;

    //  const setExpand = (data) => {
    //   if (!data) {
    //     // console.log('expanded');
    //     expand = true;
    //     console.log(expand);
    //     return true;
    //   } else {
    //     // console.log('hidden');
    //     expand = false;
    //     console.log(expand);
    //     return false;
    //   }
    // }

    // let expandClass;
    // const setExpandClass = (data) => {
    //   if (!data) {
    //     expandClass = 'hidden';
    //   } else {
    //     expandClass 'expanded';
    //   }
    // }

    // const recipe = recipes.map( (recipe, index) => (
    //   <li 
    //     key={index} 
    //     className="recipe"
    //     recipe-id={recipe.id}
    //     onClick={e => {
    //     recipe.expanded = setExpand(recipe.expanded);
    //     console.log(recipe);
    //     }}
    //   >
    //     <h3>{`${recipe.title}`}</h3>
    //     <br/>
    //     <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
    //     <p>{recipe.desc}</p>
    //   </li>
    // ));

    // const handleClick = (e) => {
    //   console.log('from handleClick',e);
    // }

    const expandedRecipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe"
        onClick={e => {
          // recipe.expanded = setExpand(recipe.expanded);
          // console.log(recipe);
          // this.props.dispatch(handleClick(recipe.expanded))
          this.props.dispatch(toggleExpand(recipe.expanded))
          console.log(recipe);
        }}
      >
        <h3>{`${recipe.title}`}</h3>
        <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
        <p>{recipe.desc}</p>
        {/* ON CLICK OF LI, TOGGLE className from "hidden" to expanded */}
        <div 
          className="expanded"
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