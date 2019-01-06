import React from 'react';
import { connect } from 'react-redux'; 
// import Spinner from 'react-spinkit';
// import {searchRecipes} from '../actions/search';
import './search-form.css';

//searchClick changes the expanded from false to true on click of an <li>
import { searchClick } from '../actions/controls';
import SearchForm from './SearchForm';

export function SearchSection(props) {

  if(props.search) { 
    console.log('when SearchTerm submit is successful on SearchSection, props.search is:', props.search);
    return (
    <SearchForm />
    )
  }

  return (
    <div className="search-container-click">
      <button
        className="search-btn" href="#info"
        onClick={ () => {
          console.log('on searchSection load, search is clicked:', props.search)
          props.dispatch(searchClick()) 
          }
        }
    >
      <span className="search-text">
      Search 
      <svg className="header-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="search-svg">
            <path d="M2,10.666V5.333L5.333,2h5.333L14,5.333v5.333L10.667,14H5.333ZM4.364,0,0,4.363v7.273L4.364,16h7.273l1.757-1.757L18,20h2V18l-5.757-4.606L16,11.637V4.363L11.637,0Z" />
          </svg>
      </span>
    </button>
    </div>
  );
}

export const mapStateToProps = state => ({
  search: state.searchReducer.search
});

export default connect(mapStateToProps)(SearchSection);