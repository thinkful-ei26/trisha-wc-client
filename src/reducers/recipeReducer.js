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
      const findById = (recipes, recipeId) => {
        const recipe = recipes.filter( recipe => recipeId === recipe.id )
        console.log('recipe[0].expanded findById',recipe[0].expanded);
        return recipe;
      }

      const clickedRecipe = findById(state.recipes, action.id);
      console.log('clickedRecipe', clickedRecipe);

      const expandedRecipe = Object.assign([], clickedRecipe, [...clickedRecipe, clickedRecipe[0].expanded = true ])

      console.log('expandedRecipe',expandedRecipe);

      return Object.assign({}, state, {
        recipes: [...state.recipes] 
      })
      
    default: return state
  }
}

export default recipeReducer
