import React from 'react';
import { gotIt } from '../actions/nav';
import { connect } from 'react-redux';

export function InfoModal(props) {
  
    return (
      <div className="info-overlay" id="modal">
        <div 
          className="info-content"
          aria-live="polite"
        >
          <h3>How to use this app</h3>         
            <p>Browse through the recipe list for your meal ideas. Click the recipe title to show detailed view, including ingredients and directions.</p>
            <p>
            Still unsure what to cook? Click the "Surprise Me" button for a random recipe. 
            </p>
            
            <button 
            className="got-it-btn"
            onClick={ () => props.dispatch(gotIt()) }
            >
              Back to Recipes
            </button>

            <hr />
            <div className="dev">
              <p>
              <strong>App Description:</strong><br/><br/>
                Not sure what to cook for your next meal? What's Cooking is a full-stack app that can help you narrow down your choices. On page load, a user can see a list of recipes. They can click on a recipe to see the necessary information to make the desired dish. A user can also click the "surprise me" button to generate a random recipe. In addition, a user can add a new recipe to the "What's Cooking?" app database. A user does not need to login in order to use my app.
              </p>
              <a
                  className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
                >
                  GitHub Repo
                </a>
            </div>

        </div>
      </div>
    );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info
});

export default connect(mapStateToProps)(InfoModal);