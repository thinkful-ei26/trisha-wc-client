import React from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../actions';
import './recipe-list.css';

export class RecipeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render () {
    console.log('this.props on RecipeList', this.props);
    const { recipes } = this.props;
    const recipe = recipes.map( (recipe, index) => (
      <li key={index} className="recipe">
        {console.log('recipe inside of li',recipe)}
        <h3>{`${recipe.title}`}</h3>
        <p>{`${recipe.desc}`}</p>
        <img src={recipe.imgUrl} alt={`recipe img for ${recipe.title}`} width="200px"/>
      </li>
    ));
 
    console.log('recipes from RecipeList',recipes);

    return (
      <ul className="recipe-list" aria-live="polite">
        {recipe}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes
  }
}

export default connect(mapStateToProps)(RecipeList);