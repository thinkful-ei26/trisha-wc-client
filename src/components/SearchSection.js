import React from 'react';
import { connect } from 'react-redux'; 
// import Spinner from 'react-spinkit';
// import {searchRecipes} from '../actions/search';
import './search-form.css';
import { searchClick } from '../actions/controls';
import SearchForm from './SearchForm';

export function SearchSection(props) {

  if(props.search) { 
    return <SearchForm />
  }

  return (
    <button
      className="search-btn" href="#info"
      onClick={ () => {
        console.log('clicked', props.search)
        props.dispatch(searchClick()) 
        }
      }
    >
      <span className="search-text">SEARCH BUTTON</span>
    </button>
  );
}

export const mapStateToProps = state => ({
  search: state.searchReducer.search
});

export default connect(mapStateToProps)(SearchSection);