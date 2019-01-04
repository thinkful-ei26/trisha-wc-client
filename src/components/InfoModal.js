import React from 'react';
import { gotIt } from '../actions/nav';
import { connect } from 'react-redux';

export function InfoModal(props) {
  
    return (
      <div className="info-overlay float" id="modal">
        <div 
          className="info-content"
          aria-live="polite"
        >
          <h3>How to use this app</h3>         
            <p>Not sure what to cook for your next meal? What's Cooking is a full-stack app that can help you narrow down your choices. On page load, a user can browse through the recipe list for meal ideas. A user can also click on a recipe to see the necessary information to make the desired dish.
            </p>
            <p>
            Still unsure what to cook? Click the "Surprise Me" button to generate a random recipe. In addition, a user can add a new recipe to the "What's Cooking?" app database by clicking on "+ Add Recipe". A user does not need to login in order to use my app.
            </p>
            
            <button 
            className="got-it-btn"
            onClick={ () => props.dispatch(gotIt()) }
            >
              Back to Recipes
            </button>
            <a
                className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
            >
                GitHub Repo
            </a>
        </div>
      </div>
    );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info
});

export default connect(mapStateToProps)(InfoModal);