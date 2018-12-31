import React from 'react';
import { connect } from 'react-redux';
import './recipe-list.css';
import Recipes from './Recipes';

export class RecipeList extends React.Component {

  render () {
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
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
  }
}

export default connect(mapStateToProps)(RecipeList);