import React from 'react';
import { infoClick, addRecipe } from '../actions/nav.js';
import { connect } from 'react-redux';
import InfoModal from './InfoModal';
import RecipeForm from './RecipeForm';

export function TopNav(props) {
  // console.log('props on TopNav', props)

  if(props.info) { 
    return ( 
      < InfoModal />
    ) 
  }

  if(props.addRecipe) { 
    //this will always print if props.addRecipe is true
    // console.log('props.addRecipe on TopNav', props.addRecipe)
    return ( 
      < RecipeForm />
    ) 
  }

  return (
    <ul className="top-nav">
      <li className="info">
        <a 
          className="info" href="#info"
          aria-label="How to use this app"
          onClick={ () => {
            // console.log('clicked info btn');
            props.dispatch(infoClick() )
            }
          }
        >
          Info
        </a>
      </li>
      <li className="new-recipe">
        <a
          href="#add-recipe"
          className="new"
          aria-label="Create a new recipe"
          onClick={() => {
            // console.log('clicked addRecipe btn'); 
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