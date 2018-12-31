// import * as actions from '../actions';
import { FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions';

import { TOGGLE_EXPAND } from '../actions/recipe';

const initialState = {
  recipes: [],
  loading: false,
  error: null
}

export const recipeReducer = (state=initialState, action) => {
  switch (action.type) {
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
      console.log('state', state);
      console.log('state.recipes', state.recipes)
      console.log('action', action);
      console.log('action.id', action.id);

      const findById = (recipes, recipeId) => {
        const recipe = recipes.filter( recipe => recipeId === recipe.id )
        return recipe;
      }

      const clickedRecipe = findById(state.recipes, action.id);
      console.log('clickedRecipe', clickedRecipe);

      return Object.assign({}, state, {
        recipes: clickedRecipe 
      })

    // eslint-disable-next-line no-fallthrough
    default: return state
  }
}

export default recipeReducer
