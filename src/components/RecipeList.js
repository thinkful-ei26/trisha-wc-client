import React from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../actions';

export class RecipeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render () {
    const { recipes } = this.props;
    const recipe = recipes.map( (recipe, index) => (
      <li key={index}>
        {recipe}
      </li>
    ));

    console.log('props from RecipeList',this.props);

    return (
      <ul className="recipe-list">
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