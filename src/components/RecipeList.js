import React from 'react';
import { connect } from 'react-redux';
// import fetchRecipes from '../actions';
import './recipe-list.css';
// import { toggleExpand } from '../actions/recipe';
// import recipeListReducer from '../reducers/recipeListReducer';
import Recipes from './Recipes';

export class RecipeList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {expanded: false};
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(e) {
  //   this.setState({expanded: !this.state.expanded});
  // }

  render () {
    // if(recipe.expanded) {
    //   return (
    //     <ul 
    //     className="recipe-list" 
    //     aria-live="polite"
    //     >
    //       {expandedRecipe}
    //     </ul>
    //   )
    // } else {
      return (
        <div>
          <button onClick={e => console.log(this.props)}>
            this.props on RecipeList
          </button>
           <ul 
          className="recipe-list" 
          aria-live="polite"
          >
            <Recipes />
          </ul>
        </div>
       
      )
    // }
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    // expanded: state.recipeReducer.recipes.expanded
  }
}

export default connect(mapStateToProps)(RecipeList);