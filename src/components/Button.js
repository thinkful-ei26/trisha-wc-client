import React from 'react';
import { addRecipe } from '../actions/nav';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { Link } from 'react-router-dom';

export function Button(props) {
  
  if(props.addRecipe) { 
    return <RecipeForm />
  }

  return (
    <div className="add-recipe-container">
        <button
          className="add-recipe-btn"
          aria-label="Create a new recipe"
          onClick={() => {
            props.dispatch(addRecipe() )
            }
          }
        >
          <Link to="/add-recipe">
            <span className="add-recipe-text">+ ADD RECIPE</span>
          </Link>
          
        </button>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    addRecipe: state.navReducer.addRecipe
  }
};

export default connect(mapStateToProps)(Button);