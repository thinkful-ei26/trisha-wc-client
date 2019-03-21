import React from 'react';
import { infoClick } from '../actions/nav';
import { connect } from 'react-redux';
import InfoModal from './InfoModal';
import { Route, Link } from 'react-router-dom';
import '../styles/top-nav.css';

export function TopNav(props) {
  if(props.info) { 
    return (
      <Route path="/info" component={InfoModal} />
    )
  } 

  return (
    <ul className="header-content">
      <li className="header-center">
        <h1 className="logo-content">
          What's Cooking?
        </h1>
      </li>
      <li className="header-right">
        <button
          className="info-btn" href="#info"
          aria-label="How to use this app"
          onClick={ () => {
            props.dispatch(infoClick()) 
            }
          }
        >
          <Link to="/info">
            <span className="info-text">INFO</span>
          </Link>
        </button>
      </li>
      <li className="wc-header-bar"></li>
    </ul>
  );
}

export const mapStateToProps = (state) => {
  return {
    info: state.navReducer.info,
  }
};

export default connect(mapStateToProps)(TopNav);