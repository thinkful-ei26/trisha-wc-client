import React from 'react';
import { infoClick, addRecipe } from '../actions/nav.js';
import { connect } from 'react-redux';
import InfoModal from './InfoModal';

export function TopNav(props) {

  if(props.info) { 
    console.log('props.info on TopNav', props.info)
    return ( 
      < InfoModal />
    ) 
  }
  
  return (
    <ul className="top-nav">
      <li className="info">
        <a 
          className="info" href="#info"
          aria-label="How to use this app"
          onClick={ () => {
            console.log('clicked info btn');
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
            console.log('clicked addRecipe btn'); 
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
  // info: state.info,
  // addRecipe: state.addRecipe
  info: state.navReducer.info,
  addRecipe: state.navReducer.addRecipe
});

export default connect(mapStateToProps)(TopNav);