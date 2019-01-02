import React from 'react';
import { infoClick, addRecipe } from '../actions/nav.js';
import { connect } from 'react-redux';
import InfoModal from './InfoModal';
import RecipeForm from './RecipeForm';

export function TopNav(props) {

  if(props.info) { 
    return < InfoModal />
  }

  if(props.addRecipe) { 
    return < RecipeForm />
  }

  return (
    <ul className="top-nav">
      <li className="info">
        <a 
          className="info-link" href="#info"
          aria-label="How to use this app"
          onClick={ () => {
            props.dispatch(infoClick()) 
            }
          }
        >
          Info
        </a>
      </li>
      <li className="add-recipe">
        <a
          href="#add-recipe"
          className="add-recipe-link"
          aria-label="Create a new recipe"
          onClick={() => {
            props.dispatch(addRecipe() )
          }
        }
        >
          + Add Recipe
        </a>
      </li>
    </ul>
  );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info,
  addRecipe: state.navReducer.addRecipe
});

export default connect(mapStateToProps)(TopNav);