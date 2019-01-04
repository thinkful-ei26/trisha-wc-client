import React from 'react';
import { infoClick, addRecipe } from '../actions/nav';
import { connect } from 'react-redux';
import InfoModal from './InfoModal';
import RecipeForm from './RecipeForm';
import './top-nav.css';

export function TopNav(props) {

  if(props.info) { 
    return < InfoModal />
  }

  if(props.addRecipe) { 
    return < RecipeForm />
  }

  return (
    // <ul className="header-content">
    //   <li className="header-left">
    //     <button
    //       className="info-btn" href="#info"
    //       aria-label="How to use this app"
    //       onClick={ () => {
    //         props.dispatch(infoClick()) 
    //         }
    //       }
    //     >
    //       <span className="info-text">Info</span>
    //     </button>
    //   </li>
    //   <li className="header-center">
    //     <h1 className="logo-content">
    //       What's Cooking?
    //     </h1>
    //   </li>
    //   <li className="header-right">
    //     <button
    //       className="add-recipe-btn"
    //       aria-label="Create a new recipe"
    //       onClick={() => {
    //         props.dispatch(addRecipe() )
    //       }
    //     }
    //     >
    //       <span className="add-recipe-text">+ Add Recipe</span>
    //     </button>
    //   </li>
    //   <div className="wc-header-bar"></div>
    // </ul>

    <div className="header-content">
    <div className="header-left">
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
    </div>
    <div className="header-center">
      <h1 className="logo-content">
        What's Cooking?
      </h1>
    </div>
    <div className="header-right">
      <ul>
        <li class="user-actions-item">
          <button
          className="add-recipe-btn"
          aria-label="Create a new recipe"
          onClick={() => {
            props.dispatch(addRecipe() )
            }
          }
          >
            <span className="add-recipe-text">Add</span>
          </button>
        </li>
        <li className="user-actions-item">
          <svg className="header-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="search-svg">
            <path d="M2,10.666V5.333L5.333,2h5.333L14,5.333v5.333L10.667,14H5.333ZM4.364,0,0,4.363v7.273L4.364,16h7.273l1.757-1.757L18,20h2V18l-5.757-4.606L16,11.637V4.363L11.637,0Z" />
          </svg>
        </li>
      </ul>
    </div>
    <div className="wc-header-bar"></div>
  </div>
    


  );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info,
  addRecipe: state.navReducer.addRecipe
});

export default connect(mapStateToProps)(TopNav);