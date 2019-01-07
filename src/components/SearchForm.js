import React from 'react';
import {searchRecipes} from '../actions';

export default function Controls(props) {

  return (
    <section className="search-section">
        <form 
          id="search-form"
          onSubmit={e => {
            e.preventDefault();
            let input = document.getElementById("search-form").elements;
            console.log('input', input);
            let searchTerm = input[0].value;
            console.log('searchTerm', searchTerm);
            this.props.dispatch(searchRecipes(searchTerm))
            }
          }
        >
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