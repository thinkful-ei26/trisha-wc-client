import React from 'react';
import { gotIt } from '../actions/nav';
import { connect } from 'react-redux';

export function InfoModal(props) {
  
    return (
      <div className="info-overlay" id="modal">
        <div className="info-content">
          <h3>How to use this app</h3>
          <div>
            <p>Browse through the recipe list for your meal ideas. Click the recipe title to show detailed view, including ingredients and directions.</p>
            <p>
            Still unsure what to cook? Click the "Surprise Me" button for a random recipe. 
            </p>
            
            <button 
            className="close"
            onClick={ () => props.dispatch(gotIt()) }
            >
              Got It!
            </button>

          </div>
        </div>
      </div>
    );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info
});

export default connect(mapStateToProps)(InfoModal);