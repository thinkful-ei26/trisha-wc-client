/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function AddRecipe(props) {
    return (
      <div className="add-recipe-overlay" id="addRecipe">
        <form className="newRecipe-form">
          <fieldset>
            <legend>Create a new recipe</legend>
            
            <label for="title">Recipe Title:</label>
            <input for="title" name="title" type="text" className="input-recipe-title" aria-label="New recipe title input" placeholder="Example" required />
            
            <label for="desc">Description:</label>
            <textarea for="desc" name="desc" className="input-recipe-desc" aria-label="new recipe input description" placeholder="This is a really awesome description"></textarea>

            <label for="ingredients">Ingredients List:</label>
            <textarea for="ingredients" name="ingredients" className="input-ingredients" aria-label="new recipe input ingredients" placeholder="Put each ingredient in its own line"></textarea>

            <label for="url">Image url:</label>
            <input for="url" name="url" type="text" className="input-image-url" aria-label="New recipe image url input" placeholder="https://www.example.com/" required />
            
            <label for="prep">Prep Time:</label>
            <select for="prep" name="prep" className="input-prep" aria-label="new recipe dropdown prep time input">
              <option selected disabled>Prep time</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
            </select>

            <label for="cook">Cook Time:</label>
            <select for="cook" name="cook" className="input-cook" aria-label="new recipe dropdown cook time input">
              <option selected disabled>Prep time</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
            </select>
            
            <p className="error-message js-error-message"></p>
            
            <button type="submit" className="create-recipe-button">
              SAVE RECIPE
            </button>
            
            <a 
              className="cancel" 
              href="#"
              onClick={ () => props.handleCancelClick() }
            >Cancel</a> 
            {/* <button type="button" className="cancel-create-recipe-button">CANCEL</button> */}
          </fieldset>
        </form>
      </div>
    );
}
