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
        <button
          className="info-btn" href="#info"
          aria-label="How to use this app"
          onClick={ () => {
            props.dispatch(infoClick()) 
            }
          }
        >
          <span className="info-text">Info</span>
        </button>
      </li>
      <li className="add-recipe">
        <button
          className="add-recipe-btn"
          aria-label="Create a new recipe"
          onClick={() => {
            props.dispatch(addRecipe() )
          }
        }
        >
          <span className="add-recipe-text">+ Add Recipe</span>
        </button>
      </li>
    </ul>
  );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info,
  addRecipe: state.navReducer.addRecipe
});

export default connect(mapStateToProps)(TopNav);