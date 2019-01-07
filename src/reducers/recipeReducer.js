import { FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions';

import { TOGGLE_EXPAND } from '../actions';
import { SURPRISE_CLICK } from '../actions/controls';

const initialState = {
  recipes: [],
  loading: false,
  error: null,
  surprise: null
}

export const recipeReducer = (state=initialState, action) => {
  switch (action.type) {

    case SURPRISE_CLICK : 
    console.log('surprise state:', state);
    const randomRecipePicker = (recipes) => {
      var recipe = recipes[Math.floor(Math.random()*recipes.length)];
      return recipe;
    }

    const randomRecipe = randomRecipePicker(state.recipes);
    
    return Object.assign({}, state, { 
      recipes: [randomRecipe],
      surprise: true
    })

    case FETCH_RECIPES_REQUEST : 
    return Object.assign({}, state, { loading: true })

    case FETCH_RECIPES_SUCCESS :
    return Object.assign({}, state, { 
      loading: false, 
      recipes: action.recipes, 
      error: null
    })

    case FETCH_RECIPES_ERROR :
    return Object.assign({}, state, { 
      loading: true,
      error: action.error
    })

    case TOGGLE_EXPAND :
      const findById = (recipes, recipeId) => {
        const recipe = recipes.filter( recipe => recipeId === recipe.id )
        return recipe;
      }

      /* ==== CHANGE EXPANDED FALSE TO TRUE ON CLICK OF LI ====*/
      let clickedRecipe = findById(state.recipes, action.id);

      const expandedRecipe = Object.assign({}, clickedRecipe[0], [clickedRecipe[0].expanded = !state.expanded ])
      console.log('expandedRecipe',expandedRecipe);

      return Object.assign({}, state, {
        recipes: [...state.recipes] 
      })
    
    default: return state
  }
}

export default recipeReducer
