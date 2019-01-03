import React from 'react';
import {searchRecipes} from '../actions/search';

export default function Controls(props) {

  return (
    <section className="search-section">
        <form 
          id="search-form"
          onSubmit={e => {
            e.preventDefault();
            let inputs = document.getElementById("search-form").elements;
            console.log('inputs', inputs);
            let searchTerm = inputs[0].value;
            console.log('searchTerm', searchTerm);
            // this.props.dispatch(searchRecipes(searchTerm))
          }
        }>
          <label htmlFor="search">Search</label>&emsp;
          <input
              aria-controls="recipe-count"
              type="search"
              id="search"
              name="search"
              placeholder="recipe search"
          />
        </form>
    </section>
  );
};