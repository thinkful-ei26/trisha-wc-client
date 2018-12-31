import React from 'react';

export default function Surprise(props) {

  //1. On click, do an async action to fetch one random recipe from db
  // refer to RecipeList, actions/index.js, and recipeReducer
  //2. .then render the recipe (replace the whole RecipeList with a SurpriseRecipe Component)

  return (
    <div className="surprise-btn">
      <button
        onClick={ e => {
          console.log('surprise btn clicked. props:', props);
        }}
      >
        Surprise Me
      </button>
    </div>
  );
}
