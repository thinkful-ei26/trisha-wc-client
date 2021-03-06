/* eslint-disable no-unused-vars */
import { 
  FETCH_RECIPES_REQUEST, 
  FETCH_RECIPES_SUCCESS, 
  FETCH_RECIPES_ERROR, 
  TOGGLE_EXPAND, 
  SURPRISE_CLICK
} from '../actions';

import {
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS, 
  SEARCH_RECIPES_ERROR 
} from '../actions/search';

const initialState = {
  recipes: [],
  loading: false,
  error: null,
  surprise: false,
  surpriseRecipes: []
}

export const recipeReducer = (state=initialState, action) => {
  switch (action.type) {

    case SEARCH_RECIPES_REQUEST : 
    return Object.assign({}, state, { loading: true })

    case SEARCH_RECIPES_SUCCESS :
    return Object.assign({}, state, { 
      loading: false, 
      recipes: action.recipes, 
      error: null
    })

    case SEARCH_RECIPES_ERROR :
    return Object.assign({}, state, { 
      loading: true,
      error: action.error
    })

    case SURPRISE_CLICK : 
    const randomRecipePicker = (recipes) => {
      var recipe = recipes[Math.floor(Math.random()*recipes.length)];
      return recipe;
    }

    const randomRecipe = randomRecipePicker(state.recipes);
    
    return Object.assign({}, state, { 
      recipes: [randomRecipe],
      surprise: true,
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

    //find the recipe by id by passing id & expanded props from RecipeList component
      const findById = (recipes, recipeId) => {
        const recipe = recipes.filter( recipe => recipeId === recipe.id )
        return recipe;
      }

     //toggle recipe conditionally based on expanded state 
      let clickedRecipe = findById(state.recipes, action.id);

      if(clickedRecipe[0].expanded){
        Object.assign({}, clickedRecipe[0], [clickedRecipe[0].expanded = false ])
        return Object.assign({}, state , {recipes: [...state.recipes]} )
      } else if (!clickedRecipe[0].expanded) {
        Object.assign({}, clickedRecipe[0], [clickedRecipe[0].expanded = true ])
    
        return Object.assign({}, state , {recipes: [...state.recipes]} )
      } else {
        return Object.assign({}, state , {recipes: [...state.recipes]} )
      }
      
    default: return state
  }
}

export default recipeReducer
