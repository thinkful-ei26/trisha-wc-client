import React from 'react';
import { infoClick, addRecipe } from '../actions/nav';
import { connect } from 'react-redux';
import InfoModal from './InfoModal';
import RecipeForm from './RecipeForm';
import './top-nav.css';

// import SearchSection from './SearchSection';

export function TopNav(props) {

  if(props.info) { 
    return < InfoModal />
  }

  if(props.addRecipe) { 
    return < RecipeForm />
  }

  return (
    <ul className="header-content">
      <li className="header-left">
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
      <li className="header-center">
        <h1 className="logo-content">
          What's Cooking?
        </h1>
      </li>
      <li className="header-right">
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
      <div className="wc-header-bar"></div>
    </ul>

  //   <div className="header-content">
  //   <div className="header-left">
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
  //   </div>
  //   <div className="header-center">
  //     <h1 className="logo-content">
  //       What's Cooking?
  //     </h1>
  //   </div>
  //   <div className="header-right">
  //     <ul>
  //       <li className="user-actions-item">
  //         <button
  //         className="add-recipe-btn"
  //         aria-label="Create a new recipe"
  //         onClick={() => {
  //           props.dispatch(addRecipe() )
  //           }
  //         }
  //         >
  //           <span className="add-recipe-text">Add</span>
  //         </button>
  //       </li>
  //       {/* <li className="user-actions-item">
  //         <SearchSection />
  //       </li> */}
  //     </ul>
  //   </div>
  //   <div className="wc-header-bar"></div>
  // </div>
    


  );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info,
  addRecipe: state.navReducer.addRecipe
});

export default connect(mapStateToProps)(TopNav);