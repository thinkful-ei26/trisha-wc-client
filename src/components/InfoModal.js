import React from 'react';
import { gotIt } from '../actions/nav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function InfoModal(props) {  
  return (
    <div className="info-overlay" id="modal"> 
      <div 
        className="info-content"
        aria-live="polite"
      >       
        <h2>
          How to use this app
        </h2>
        <p>
          Get inspired by What’s Cooking, a public recipe database that can help you narrow down your choices. Without logging in, you can:
        </p>
        <ul className="info-text-list">
          <li>Browse through the recipe list for meal ideas and click on a recipe for instructions to make the dish.</li>
          <li>Not sure what to cook? Click the "Surprise Me" button to generate a random recipe.</li>
          <li>Add a new recipe to the "What's Cooking?" app by clicking on the "+ Add Recipe" button</li>
        </ul>

        <h3>Search for a recipe and start using the app now!</h3>  
        <button 
        className="got-it-btn"
        onClick={ () => props.dispatch(gotIt()) }
        >
          <Link to="/">Back to Recipes</Link>
        </button>
        <a
          className="github-repo" 
          // eslint-disable-next-line react/jsx-no-target-blank
          href="https://github.com/thinkful-ei26/trisha-wc-client" target="_blank"
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