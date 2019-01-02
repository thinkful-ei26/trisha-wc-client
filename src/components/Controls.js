import React from 'react';

export default function Controls(props) {

  return (
    <section className="controls">
      <div className="search-form">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search</label>&emsp;
          <input
              // aria-controls="recipe-count"
              type="search"
              id="search"
              name="search"
              placeholder="recipe search"
          />
        </form>
      </div>
    </section>
  );
};
