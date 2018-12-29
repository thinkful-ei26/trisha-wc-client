import React from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../actions';
import './recipe-list.css';
// import { toggleExpand } from '../actions/recipe';
// import recipeListReducer from '../reducers/recipeListReducer';

export class RecipeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
    // console.log(this.props);
  }

  render () {

    const { recipes } = this.props;
    // const recipe = recipes.map( (recipe, index) => (
    //   <li 
    //     key={index} 
    //     className="recipe"
    //     // onClick={ (e) => { 
    //     //   // e.preventDefault(); 
    //     //   this.props.dispatch(toggleExpand());
    //     //   console.log(recipe);
    //     //   // console.log('this.props.recipe on RecipeList',recipe);
    //     //   // console.log(e.currentTarget);

        //   if (!recipe.expanded) {
        //     console.log('expanded in li is false');
        //     recipe.expanded = true;
        //     console.log(recipe.expanded);
        //   }
        // }
        // }
    //   >
    //     {/* {console.log('recipe inside of li',recipe)} */}
    //     <h3>{`${recipe.title}`}</h3>
    //     <p>{`${recipe.desc}`}</p>
    //     <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
    //   </li>
    // ));

    const recipe = recipes.map( (recipe, index) => (
      <li 
        key={index} 
        className="recipe"
        // expanded={recipe.expanded.toString()}
      >
        <h3>{`${recipe.title}`}</h3>
        <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
        <p>{recipe.desc}</p>
        {/* ON CLICK OF LI, TOGGLE className from "hidden" to expanded */}
        <div className="hidden">
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
  
    // console.log(this.props.recipes);

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

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    // expanded: state.recipeReducer.recipes.expanded
  }
}

export default connect(mapStateToProps)(RecipeList);