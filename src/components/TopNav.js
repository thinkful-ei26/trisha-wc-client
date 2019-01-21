import React from 'react';
import { infoClick, addRecipe } from '../actions/nav';
import { connect } from 'react-redux';
import InfoModal from './InfoModal';
import RecipeForm from './RecipeForm';
import '../styles/top-nav.css';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

export function TopNav(props) {

  console.log(props);
  if(props.info) { 
    return (
    <Router>
      <div>
        <Redirect from="/" to ="/info" />
        <Route exact path="/info" component={InfoModal} />
      </div>  
    </Router>
    )
  } 

  if(props.addRecipe) { 
    return <RecipeForm />
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
          <Link to="/info"><span className="info-text">INFO</span></Link>
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
          <span className="add-recipe-text">+ ADD RECIPE</span>
        </button>
      </li>
      <div className="wc-header-bar"></div>
    </ul>
  );
}

export const mapStateToProps = (state) => {
  return {
    info: state.navReducer.info,
    addRecipe: state.navReducer.addRecipe
  }
};

export default connect(mapStateToProps)(TopNav);