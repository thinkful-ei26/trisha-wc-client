import React from 'react';

export default function TopNav(props) {

  return (
    <ul className="top-nav">
      <li className="info">
        <a 
          className="info" href="#info"
          aria-label="How to use this app"
          info={props.info}
          onClick={ () => props.handleInfoClick() }
        >
          Info
        </a>
      </li>
      <li className="new-recipe">
        <a
          href="#+"
          className="new"
          aria-label="Create a new recipe"
          addRecipe={props.addRecipe}
          onClick={() => props.handleAddRecipe()}
        >
          + Add Recipe
        </a>
      </li>
    </ul>
  );
}