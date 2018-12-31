import React from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../actions';
import './recipe-list.css';
// import { toggleExpand } from '../actions/recipe';
// import recipeListReducer from '../reducers/recipeListReducer';

export class RecipeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render () {
    let expand;
    const { recipes } = this.props;

    const setExpand = (data) => {
      if (!data) {
        // console.log('expanded');
        expand = 'expanded';
        console.log(expand);
        return true;
      } else {
        // console.log('hidden');
        expand = 'hidden';
        console.log(expand);
        return false;
      }
    }

    // const setExpandClass = (data) => {
    //   if (!data) {
    //     return 'hidden';
    //   } else {
    //     return 'expanded';
    //   }
    // }

    const recipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe"
        onClick={e => {
          recipe.expanded = setExpand(recipe.expanded);
          console.log(recipe);
        }}
      >
        <h3>{`${recipe.title}`}</h3>
        <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
        <p>{recipe.desc}</p>
      </li>
    ));

    const expandedRecipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe"
        onClick={e => {
          recipe.expanded = setExpand(recipe.expanded);
          console.log(recipe);
        }}
      >
        <h3>{`${recipe.title}`}</h3>
        <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
        <p>{recipe.desc}</p>
        {/* ON CLICK OF LI, TOGGLE className from "hidden" to expanded */}
        <div className="expanded">
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

    if(recipe.expanded) {
      return (
        <ul 
        className="recipe-list" 
        aria-live="polite"
        >
          {expandedRecipe}
        </ul>
      )
    } else {
      return (
        <ul 
        className="recipe-list" 
        aria-live="polite"
        >
          {recipe}
        </ul>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    // expanded: state.recipeReducer.recipes.expanded
  }
}

export default connect(mapStateToProps)(RecipeList);